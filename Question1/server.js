var express = require("express");
var axios = require('axios');
var app = express();
var path = require("path");

app.listen(5150, function () {
    console.log("server started on 5150");
})

app.use(express.urlencoded({ extended: true }));// for the conversion of binary to json,otherwise it will show undefined.

authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMzM3NTAsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiODUxM2RlYTUtN2FjZS00NjdkLTk1ZjYtNzZjMTJlMTk1ODY0Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjUxNTEifQ.fIiDjlMP-Z9MuMtcOb2131skq6NPv3jJxSWcmr36Bxk"
app.get('/trains', async (req, res) => {
    try {
      const response = await axios.get('http://20.244.56.144/train/trains', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      
      //console.log(response.data); 

      const filteredData = filterTrainData(response.data);
     // res.send(response.data);
      res.send(filteredData);
    } catch (error) {
      console.error('Failed to fetch train data', error);
      res.status(500).send('Internal Server Error');
    }
  });

  function filterTrainData(data) {
    const now = new Date();
    const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60000);
    const twelveHoursFromNow = new Date(now.getTime() + 12 * 60 * 60000);
  
    const trains = data;
  
    if (!trains || !Array.isArray(trains)) {
      console.error('Invalid train data', data);
      return [];
    }
  
    return trains
      .map(train => {
        const { Hours, Minutes } = train.departureTime;
        const departureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), Hours, Minutes);
        
        return {
          ...train,
          departureDate
        };
      })
      .filter(train => {
        return train.departureDate > thirtyMinutesFromNow && train.departureDate < twelveHoursFromNow;
      })
      .sort((a, b) => a.departureDate - b.departureDate)
      .map(train => {
        const { Hours, Minutes } = train.departureTime;
        const formattedDepartureTime = `${String(Hours).padStart(2, '0')}:${String(Minutes).padStart(2, '0')}`;
  
        return {
          trainName: train.trainName,
          trainNumber: train.trainNumber,
          departureTime: formattedDepartureTime,
          delayedBy: train.delayedBy,
          seatsAvailable: {
            sleeper: train.seatsAvailable.sleeper,
            AC: train.seatsAvailable.AC,
          },
          price: {
            sleeper: train.price.sleeper,
            AC: train.price.AC,
          },
        };
      });
  }
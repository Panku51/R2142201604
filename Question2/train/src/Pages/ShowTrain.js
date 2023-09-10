import React from 'react';
import "../App.css";

const ShowTrain = () => {

  return (
    <>
      <div>
        <h1 className='heading'>Question Pool</h1>
        <br />
      </div>
      {/* <div className='data'>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Select</th>
              <th>Question</th>
              <th>Question Category</th>
              <th>Question Level</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {QuesList.map((val, index) => (
              <tr key={index}>
                <td>
                  <center>
                    <input
                      className='checkbox'
                      type="checkbox"
                      checked={selectedQuestions.includes(val.id)}
                      onChange={(e) => handleCheckboxChange(e, val.id)}
                    />
                  </center>
                </td>
                <td>
                  <input
                    type="text"
                    value={val.question}
                    onChange={(e) => updateQuestionValue(index, 'question', e.target.value)}
                  />
                </td>
                <td><input
                  type="text"
                  value={val.category}
                  onChange={(e) => updateQuestionValue(index, 'category', e.target.value)}
                /></td>
                <td><input
                  type="text"
                  value={val.difficulty}
                  onChange={(e) => updateQuestionValue(index, 'difficulty', e.target.value)}
                /></td>
                <td>
                  <center>
                    <button className='heading' onClick={() => updateQues(val.id)}>Update</button>
                  </center>
                </td>
                <td>
                  <center>
                    <button className='heading' onClick={() => remove(val.id)}>Delete</button>
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <label>Test Name</label>
          <input type="text" id="testName" value={testName} onChange={handleTestNameChange} />
          <button
            className="heading"
            onClick={handleTestCreation}
            disabled={selectedQuestions.length === 0}
          >
            Create Test
          </button>
        </div>

      </div> */}

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Select</th>
            <th>Id</th>
            <th>Question</th>
            <th>option 1</th>
            <th>option 2</th>
            <th>option 3</th>
            <th>option 4</th>
            <th>option 5</th>
            <th>Answer</th>
            <th>solution</th>
            <th>subject</th>
            <th>topic</th>
            <th>Sub-Topic</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </>
  );
};

export default ShowTrain;
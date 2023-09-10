import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ShowTrain from './Pages/ShowTrain';

function App() {
  return (
    <Route path='/' element={<ShowTrain />} />
  );
}

export default App;

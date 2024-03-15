import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./component/Login";

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={<Login />} />
    <Route exact path='*' element = {<h1>404</h1>}/>
    </Routes>                
    </Router>
  );
}

export default App;

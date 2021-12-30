//template
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login'
import Reservation from './Screens/Reservation'
import '../src/App.css'
import TestRequests from "./Server/TestRequest";

export default function App() {
  return (
    <Router>
      <div >
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/Reservation" element = {<Reservation />}>
            </Route>
          <Route path="/Login" element = {<Login />}>
          </Route>
          <Route path="/"
            element = {<TestRequests />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}




//template
/* import logo from './logo.svg';
import './App.css';
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
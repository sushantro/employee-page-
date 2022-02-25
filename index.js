import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Employee from './Emp';
import Payment from './Payment';
import Project from './Project';
import Login from './Login';
import Entry from './Entrypage';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     {/* <Payment/> */}
     <Project/> 


    {/* <Login/> */}
    {/* <Entry/> */}
    {/* <Router>
      <Navbar />
      <Switch>
        <Route path='/Employee' exact component={Employee} />
        
        <Route path='/Project' component={Project} />
        <Route path='/Payment' component={Payment} />
      </Switch>
    </Router> */}
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

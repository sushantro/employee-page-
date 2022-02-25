import React from "react";
import {  Link } from "react-router-dom";





const Navbar=()=>{


    <>
    <li>
      <Link to="/Emp">Employee</Link>
    </li>
    <li>
      <Link to="/Payment">Payment</Link>
    </li>
    <li>
      <Link to="/Project">Projects</Link>
    </li>
    <li>
      <Link to="/goats">Entry</Link>
    </li>
    
    
    
    </>

}

export default Navbar;
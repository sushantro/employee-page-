import React from "react";
import './index.css';



const Employee = () => {
    return (
        <>
        <div className="container">
    <div className="title">Employee Details</div>
    <div className="content">
      <form >
        <div className="user-details">
          <div className="input-box">
            <span className="details">Emp-code:</span>
            <input name="EmpID" id="EID" type="text" placeholder="Enter your emp code"/ >
          </div>
          <div className="input-box">
            <span className="details">Employee Name:</span>
            <input name="Name" type="text" placeholder="Enter your name" />
          </div>
          <div className="input-box">
            <span className="details">Joining Date:</span>
            <input type="date" className="form-control-md" id="email" placeholder="MM/DD/yyyy" / >
          </div>
          <div className="input-box">
            <span className="details">Grade:</span>
            <select name="Grade" className="form-control-md" >
              <option selected>Choose...</option>
              <option>MT</option>

              <option>J1</option>
              <option>J2</option>
              <option>J3</option>
              <option>J4</option>
              <option>J5</option>
              <option>J6</option>

              <option>M1</option>
              <option>M2</option>
              <option>M3</option>
              <option>M4</option>

              <option>S1</option>
              <option>S2</option>
              <option>S3</option>

            </select>
          </div>
          <div className="input">
            <span className="details">Skill:</span>
            <textarea name="Skill">data analyst</textarea>
            <button className="kana">+</button>

          </div>
           <div className="input-box">
            <span className="details">Monthly Salary:</span>
            <span name="mont" id="month"></span>
          </div> 
          <div className="input_fields_wrap">
            <span className="details">Annual CTC:</span>
            <div>
              <input id="ja" type="date" name="mytext"/>
              <input id="ba" type="text" name="mytext" />
              <button className="add_field_button btn">+</button>
            </div>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  </div>












        </>

    )
}
export default Employee;
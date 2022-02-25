import React from "react";
import './index.css';


const Project = () => {
    return (
        <>
            <div className="container">
                <div className="title">Project Details Page</div>
                <div className="content">
                    <form >
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Project Start date:</span>
                                <p><input type="text" name="fromDate" id="fromDate" placeholder="yyyy-mm-dd" /></p>
                            </div>
                            <div className="input-box">
                                <span className="details">Project End date:</span>
                                <p> <input type="text" name="toDate" id="toDate" placeholder="yyyy-mm-dd"  /></p>
                                <p><input type="button" name="calculate" value="Calculate"  /></p>
                                





                            </div>
                            <div className="input-box">
                                <span className="details">PO Number:</span>
                                <input name="Ponum" type="text" placeholder="Enter your Po No" />
                            </div>
                            <div className="input-box">
                                <span className="details">PO date:</span>
                                <input name="Podate" type="date" className="form-control" id="email" />
                            </div>
                            <div className="input">
                                <span className="details">SOW:</span>
                                <textarea name="Sow">data analyst</textarea>
                                <button className="japa">+</button>
                            </div>
                            <div className="input-box-2">
                                <span className="details">PO Terms and Conditions:</span>
                                <input type="text" className="form-control" name="Poterms" />

                            </div>
                            <div className="input-1">
                                <span className="details">Compliance Document:</span>
                                <textarea name="Compliance" id="john">data analyst</textarea>
                                <button className="japa-1">+</button>
                            </div>
                            <div className="input-box">
                                <span className="details">Payment Cycle:</span>
                                <select name="Paycycle" className="form-control-md" required>
                                    <option selected>Choose...</option>
                                    <option>Monthly</option>
                                    <option>Quarterly</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">Rate type:</span>
                                <select name="Rate" className="form-control-md" required>
                                    <option selected>Choose...</option>
                                    <option>Resource Wise</option>
                                    <option>Man Hours</option>
                                    <option>Man Days</option>
                                </select>
                            </div>
                            <div className="input-box">
                                <span className="details">EmpID:</span>
                                <input type="text" name="EmpID" id="result" />
                            </div>
                        </div>
                        <div className="kal">
                            <label>Duration</label>
                            <input type="text" name="Duration" id="bhas" />

                        </div>


                        <div className="input-box">
                            <span class="details">Projects details:</span>
                            <select name="Projects" class="form-control-md" >

                                <option></option>

                                <option>I AMS</option>
                                <option>I Oms</option>
                                <option>I Lms</option>
                                <option>Finacle customization</option>
                                <option>Feba</option>
                                <option>I CCM</option>
                                <option>I Recon</option>
                                <option>I AML</option>
                                <option>I MBML</option>
                                <option>I BUS</option>
                                <option>HRMS</option>

                            </select>
                            <div class="button">
                                <input type="submit" value="Submit" />

                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </>

    )

}
export default Project;
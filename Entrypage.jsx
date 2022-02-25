import React from "react";
import "./entry.css";



const Entry=()=>{
    return(
<>



    <div className="container">
    <h1>USER PAGE</h1>
        <div className="row">
            <div className="col-md-4">
                <div className="main">
                    <div className="service">
                        <div className="service-logo">
                            <img src="emp.png" alt=""/>
                        </div>
                        <h4>EMPLOYEE</h4>
                        <p>Emplyee details page. This screen allows you to view individual employee records in detail. </p>
                    </div>
                    <div className="shadowOne"></div>
                    <div className="shadowTwo"></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="main">
                    <div className="service">
                        <div className="service-logo">
                            <img src="pro.png" alt=""/>
                        </div>
                        <h4> PROJECT</h4>
                        <p>project details page. project due date and employee id, payments. all terms and conditons are availae.</p>
                    </div>
                    <div className="shadowOne"></div>
                    <div className="shadowTwo"></div>

                </div>
            </div>
            <div className="col-md-4">
                <div className="main">
                    <div className="service">
                        <div className="service-logo">
                            <img src="pay.png" alt="noooo"/>
                        </div>
                        <h4>PAYMENT</h4>
                        <p>payment details page. payment details aut specific project, and employee working on it. po details and condition.</p>
                    </div>
                    <div className="shadowOne"> </div>
                    <div class="shadowTwo"> </div>

                </div>
            </div>
        </div>
    </div>


</>


    )
}


export default Entry;
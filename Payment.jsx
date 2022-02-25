import React from "react";
import './index.css';



const Payment = () => {
    return (

        <>

        

            <div className="container">
                <div className="title">Payment Details Page</div>
                <div className="content">
                    <form >
                      
                        <div className="user-details">
                            
                            <div className="input-box">

                                <span className="details">Project Duration:</span>
                                <input name="ProDura" id="dur" type="type"/>
                                    
                            </div>





                            
                            <div className="input-box">
                                <span className="details">PO Details:</span>

                                <input name="PoDe" type="text"  className="form-control"/>
                                   
                            </div>

                            <div className="input-box">
                                <span className="details">Compliance:</span>
                                <input name="Compliance" id="lala" type="file" placeholder="Provide  documents"/>


                            </div>

                            


                        <div className="input-box">
                            <span className="details">Rate from client:</span>
                            <input name="RateCli" type="text" className="form-control" id="email"/>

                        </div>

                        <div className="input">
                            
                            
                        <select name="ProSel" className="form-control-md" >
                            <option selected></option>


                            <option>bbb</option>
                            <option>aaaa</option>
                        </select> 
                        <label>Project selected</label>
                        <input type="text"  name="ProSel"/>
                            
                        </div>
                        <div className="input-box-2">
                            <span className="details">Billing date:</span>
                            <textarea name="BiDa">daaa analyst</textarea>
                            <button className="japa-2">+</button>
                        </div>
                        <div className="input-1">
                            <span className="details">Billing cycle:</span>
                            <input name="BiCy" type="date" className="form-control" id="email"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Payment Cycle:</span>
                            <select name="PyCy" className="form-control-md" >
                                <option selected>Choose...</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <span className="details">Payment Status:</span>
                            <select name="PySt" className="form-control-md" >
                                <option selected></option>
                                <option>Not submitted</option>
                                <option>Pending</option>
                                <option>Submitted</option>
                                <option>Received</option>
                            </select>
                        </div>
                </div>
                <div className="button">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
  </div >
        
        
        
        </>

    )
}
export default Payment;
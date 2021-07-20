import React from "react";
import "./style.css";
import {Link, useLocation } from "react-router-dom";


const Final=()=>{
  const location = useLocation();
    return  (
        <div className="Result">
          <div  className="ResultTitle" >
            Payment Received
          </div>
          <div className="ResultMessage">
            Thank you for your payment .Your Transaction ID is  {location.state}
    
            <br></br><br></br><Link to="/"> <button id="ok">Continue Shopping</button></Link>     
            
             </div>
         
         
        </div>
      ) 

} ;
 export default Final;
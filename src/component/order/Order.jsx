import React from 'react';
import { useSelector } from 'react-redux';
import './order.css';

const Order = ()=>{
   const selector = useSelector(state=>state);
	return(
      <>
       <div style={{textAlign:"center"}}>Thank you for reaching us</div>
       <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
              <div className="row no-gutters">
                <div className="col-md-2 dot">{selector.pendingRequestReducer.status === 'success' ? <p>&#10004;</p> :1 }</div>
                <div className="col-md-2 "><hr/></div>
                  <div className="col-md-2 dot">{selector.serviceReducer.status === "success" ? 
                  <p>&#10004;</p> : 2}</div>
                   <div className="col-md-2 "><hr/></div>
                   <div className="col-md-2 dot ">{selector.paymentReducer.status === "success" ? 
                  <p>&#10004;</p> : 3}</div>
              </div>
           </div>
           <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2">Request</div>
                 <div className="col-md-2"></div>
                  <div className="col-md-2">Service</div>
                   <div className="col-md-2"></div>
                    <div className="col-md-2">Payment</div>
              </div>
            </div>
           </div>
       </div>
      </>
	 )
};

export default Order;
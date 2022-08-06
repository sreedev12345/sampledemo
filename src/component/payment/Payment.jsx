import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { paymentAction } from '../../redux/action/PaymentAction';
import {payment} from '../common';
import './payment.css';

const Payment = ()=>{
    let selector = useSelector(state=>state);
    console.log('selector---------',selector)
    let dispatch = useDispatch();
    console.log('selector',selector.serviceReducer.status)
    const data = new Date().getHours()>=12 ? 'am' : 'pm' ;
     const history = useHistory();

  
    const generateInvoice = ()=>{
      dispatch(paymentAction());
      history.push('/order')
    };

	return(
      <div className="row payment-content">
        <div className="col-md-12">
          <div className="container-fluid">
            <div className="row border payment-details">
               <div className="col-md-4">
                <img className="col-md-12" src={payment.imageUrl} alt='payment'/>
              </div>
                <div className="col-md-4">{payment.productName}
                  <div>Training and fitness</div>
                   <p className="col-md-8">This yoga and pilate training session is designed 
                       for all levels of trainee....</p>
                    <div className="row">
                       <div className="col-md-6">for one session</div>
                       <div className="col-md-6" style={{color:"orange"}}>$ {payment.productPrize.toFixed(2)}</div>
                     </div>
                  </div>
            </div>
            <div className="border approved-payment">
                <div className="row">
            <div className="col-md-6">
             <h6 style={{color:"orange"}}>test</h6>
             <div>{`${new Date().getHours()}:${new Date().getMinutes()} ${data}`} {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</div>
           </div>
             <div className="col-md-6">
              <div className="row no-gutters">
                <div className="col-md-2 dot">{selector.pendingRequestReducer.status === 'success' ? <p>&#10004;</p> :1 }</div>
                <div className="col-md-2 "><hr/></div>
                  <div className="col-md-2 dot">{selector.serviceReducer.status === "success" ? 
                  <p>&#10004;</p> : 2}</div>
                   <div className="col-md-2 "><hr/></div>
                   <div className="col-md-2 dot ">3</div>
              </div>
           </div>
           <div className="row">
             <div className="col-md-6"></div>
              <div className="col-md-6">
              <div className="row"> <div className="col-md-2 text">Request</div>
                <div className="col-md-2"></div>
                <div className="col-md-2 text">Service</div>
                 <div className="col-md-2"></div>
                <div className="col-md-2 text">Payment</div>
                </div>
              </div>
           </div>
         </div>
          <div className="row">
            <div className="col-md-6">
              <img  style={{borderRadius : "70%",height: "100px"}} src={payment.imageUrl} alt="pro"/> <span>{payment.productName}</span>
             
            </div>
            <div className="col-md-6">
              <p className="col-md-3">you two had 12 deals before</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="col-md-12">Check in here or scan customer's QR Code to check in when the service is about to start</p>
            </div>
          </div>
           <div className="row">
            <div className="col-md-8">
               1:00pm Sunday December 29nd 2019
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <button className="btn btn-info">Start a Chat</button> &nbsp;&nbsp;
               <button className="btn btn-info" onClick={generateInvoice}>Resend Invoice</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
	)
};

export default Payment;
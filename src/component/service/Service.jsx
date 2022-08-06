import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { serviceAction } from '../../redux/action/ServiceAction';
import { accept } from '../common';
import './service.css';

const Service = ()=>{
  let dispatch =useDispatch();
  let selector = useSelector(state=>state.pendingRequestReducer.status);
  console.log('selecytor',selector);
  const data = new Date().getHours()>=12 ? 'am' : 'pm' ;
  const history = useHistory();


  
  const payment = ()=>{
    dispatch(serviceAction());
     history.push('/payment');
  };

	return(
     <div className="row product margin-space">
       <div className="col-md-12">
         <div className="container-fluid">
           <div className="row border">
              <div className="col-md-4">
                <img className="col-md-12" src={accept.imageUrl} alt='img'/>
              </div>
              <div className="col-md-4">{accept.productName}
                  <div>Training and fitness</div>
                   <p className="col-md-8">This yogas and pilates training session is designed 
                       for all levels of trainee....</p>
                    <div className="row">
                       <div className="col-md-6">for one session</div>
                       <div className="col-md-6" style={{color:"orange"}}>$ {accept.productPrize.toFixed(2)}</div>
                     </div>
                  </div>
           </div>
         </div>
        <div className="border approved-request">
            <div className="row">
            <div className="col-md-6">
             <h6 style={{color:"orange"}}>test</h6>
             <div>{`${new Date().getHours()}:${new Date().getMinutes()} ${data}`} {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</div>
           </div>
             <div className="col-md-6">
              <div className="row no-gutters">
                <div className="col-md-2 dot">{selector === 'success' ? <p>&#10004;</p> :1 }</div>
                <div className="col-md-2 "><hr/></div>
                  <div className="col-md-2 dot">2</div>
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
              <img  style={{borderRadius : "70%",height: "100px"}} src={accept.imageUrl} alt='imh'/> <span>{accept.productName}</span>
             
            </div>
            <div className="col-md-6">
              <p className="col-md-3">you two had 12 deals before</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p className="col-md-8">Check in here or scan customer's QR Code to check in when the service is about to start</p>
            </div>
          </div>
            <div className="row">
            <div className="col-md-8">
               1:00pm Sunday December 29nd 2019
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <button className="btn btn-info">check in</button> &nbsp;&nbsp;
               <button className="btn btn-info" onClick={payment}>Generate Invoice</button>
            </div>
          </div>
        </div>
       </div>
     </div>
	)
}

export default Service;
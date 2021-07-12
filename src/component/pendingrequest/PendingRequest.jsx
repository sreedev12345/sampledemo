import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { pendingRequestAction } from '../../redux/action/PendingRequestAction';
import './pendingrequest.css';



const PendingRequest = ({accept})=>{
  const history = useHistory();
  let dispatch = useDispatch();
  const data = new Date().getHours()>=12 ? 'am' : 'pm' ;
  const acceptButton = ()=>{
   dispatch(pendingRequestAction());
    history.push('/service')
  };

	return(
      <>
        <div className="container-fluid border pending-request">
          <div className="row margin-space">
           <div className="col-md-6">
             <h6 style={{color:"orange"}}></h6>
             <div>{`${new Date().getHours()}:${new Date().getMinutes()} ${data}`} {`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`}</div>
           </div>
            <div className="col-md-6">
              <div className="row no-gutters">
                <div className="col-md-2 dot">1</div>
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
              <img  style={{borderRadius : "70%",height: "100px"}} src={accept.imageUrl}/> <span>{accept.productName}</span>
             
            </div>
            <div className="col-md-6">
              <p className="col-md-3">you two had 12 deals before</p>
            </div>
          </div>
          <div>The customer is available at</div>
          <div className="row">
            <div className="col-md-6">
              Sunday December 22nd 2019
            </div>
            <div className="col-md-6">
              9:00 am - 2:00 pm
            </div>
          </div>
           <div className="row">
            <div className="col-md-6">
              Sunday December 29nd 2019
            </div>
            <div className="col-md-6">
              9:00 am - 2:00 pm
            </div>
          </div>
          <div className="row btn-pending">
            <div className="col-md-2">
              
            </div>
             <div className="col-md-10">
             <button className="btn btn-outline-info">Reschedule</button>
             <span> <button className="btn btn-info btn-accept-pending" onClick={acceptButton}>{accept.status}</button></span>
            </div>
          </div>
        </div>
      </>
	)
};

export default PendingRequest;
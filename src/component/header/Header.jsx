import React from 'react';
import './header.css';

const Header = ()=> {
	  return(
         <div className="app-header">
           <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
               <div className="col-md-9">
                  <div className="d-flex justify-content header-content">
                  <div className={window.location.pathname==='/' && window.location.pathname !=='/service' ? "path-request" : "request" }>Request</div>
                  <div className={window.location.pathname!=='/' && window.location.pathname ==='/service' ? 'path-service' :"service"}>Service</div>
                  <div className={window.location.pathname!=='/' && window.location.pathname!=='/service' && window.location.pathname==='/payment' ? "request-service" : "payment"}>Payment</div>
                </div>
              </div>
            </div>
           </div>
         </div>
	   )
};

export default Header;


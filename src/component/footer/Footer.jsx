import React from 'react';

export default class Footer extends React.Component {
	render() {
	  return(
        <div  className="container-fluid" style={{backgroundColor:"black",textAlign:"center",color:"white"}}>javascript@ {new Date().getFullYear()}</div>
	  )
	}
}
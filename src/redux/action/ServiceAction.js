export const serviceAction = ()=>dispatch=>{
   try {
    dispatch({
    	type : "SERVICE_ACCEPT",
    	status : "success",
    })
   } catch(error) {
   	  dispatch({
   	  	 type : "SERVICE_ERROR",
   	  	 status : "error",
   	  })
   }
};
export const pendingRequestAction = ()=>dispatch=>{
   try {
    dispatch({
    	type : "REQUEST_ACCEPT",
    	status : "success",
    })
   } catch(error) {
   	  dispatch({
   	  	 type : "REQUEST_ERROR",
   	  	 status : "error",
   	  })
   }
};
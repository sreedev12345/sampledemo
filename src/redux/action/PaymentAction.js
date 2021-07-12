export const paymentAction = ()=>dispatch=>{
   try {
    dispatch({
    	type : "PAYMENT_ACCEPT",
    	status : "success",
    })
   } catch(error) {
   	  dispatch({
   	  	 type : "PAYMENT_ERROR",
   	  	 status : "error",
   	  })
   }
};
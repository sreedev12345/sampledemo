const paymentReducer = (state={},action)=>{
	switch(action.type) {
      case "SERVICE_ACCEPT":
       return {
      	...state,
      	status : action.status
      }
      case "PAYMENT_ERROR":
        return {
        	...state,
        	status : action.status
        }
        default:
		  return state;
	}
};

export default paymentReducer;
const serviceReducer = (state={},action)=>{
	switch(action.type) {
      case "PAYMENT_ACCEPT":
       return {
      	...state,
      	status : action.status
      }
      case "SERVICE_ERROR":
        return {
        	...state,
        	status : action.status
        }
        default:
		  return state;
	}
};

export default serviceReducer;
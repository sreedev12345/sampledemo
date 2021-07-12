const pendingRequestReducer = (state={},action)=>{
  console.log("state",state);
  console.log("action",action)
	switch(action.type) {
      case "REQUEST_ACCEPT":
       return {
      	...state,
      	status : action.status
      }
      case "REQUEST_ERROR":
        return {
        	...state,
        	status : action.status
        }
        default:
		  return state;
	}
};

export default pendingRequestReducer;
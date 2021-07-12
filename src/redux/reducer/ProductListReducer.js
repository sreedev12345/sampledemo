const productlistReducer = (state={},action)=>{
	switch(action.type) {
      case "FETCH_PRODUCT_LIST":
       return {
      	...state,
      	payload : action.payload,
      	status : action.status
      }
      case "PRODUCT_ERROR":
        return {
        	...state,
        	payload : action.payload,
        	status : action.status
        }
        default:
		  return state;
	}
};

export default productlistReducer;

export const productListAction = (data)=>dispatch=>{
	console.log(data)
   try {
    dispatch({
    	type : "FETCH_PRODUCT_LIST",
    	status : "success",
    	payload : data
    })
   } catch(error) {
   	  dispatch({
   	  	 type : "PRODUCT_ERROR",
   	  	 status : "error",
   	  	 payload : error
   	  })
   }
};


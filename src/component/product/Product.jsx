import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Data,{ accept } from '../common';
import PendingRequest from '../pendingrequest/PendingRequest';
import { productListAction } from '../../redux/action/ProductAction'
import './product.css';



const Product = ()=>{
  let dispatch = useDispatch();
  const selector = useSelector(state => state.productlistReducer.payload);
  const [data,setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [index,setIndex] = useState(0);
  const [arr,setArr] = useState([])
  const dataPerPage = 5;
  var val = 0

    const lastIndex = currentPage*dataPerPage;

  const firstIndex = currentPage*dataPerPage-dataPerPage;

  const sliceData = selector && selector.length>0 ? selector.slice(firstIndex,lastIndex) : [];

  console.log("sliceData",sliceData)
  for(var i=0;i<Math.ceil(Data.length/dataPerPage);i++) {
    val=i;
  }

  


  useEffect(()=>{
     dispatch(productListAction(Data))
  },[])


  useEffect(()=>{
     setData([...data,...sliceData]);
  },[selector,currentPage]);


  const showMore = ()=>{
     setCurrentPage(currentPage+1);
     setData(sliceData);
  }


  

	return(
    <>
      <div className="row product">
       <div className="col-md-12">
         <div className="container-fluid product-content">
      
             {
               data.map((data,i)=>{
                  return (
                    <div className="row border" key={i}>
                      <div className="col-md-4">
                        <img className="col-md-12" src={data.imageUrl}/>
                      </div>
                      <div className="col-md-4">{data.productName}
                        <div>Training and fitness</div>
                       <p className="col-md-8">This yoga and pilate training session is designed 
                       for all levels of trainee....</p>
                       <div className="row">
                         <div className="col-md-6">for one session</div>
                         <div className="col-md-6">$ {data.productPrize.toFixed(2)}</div>
                       </div>
                      </div>
                    </div>
                  )
               })
             }
             <button disabled={val === currentPage-1} className="btn btn-secondary btn-pagination" onClick={showMore}>{val === currentPage-1 ?  "No more" : "showMore"}</button>
         </div>
       </div>
      </div>
      <PendingRequest accept={accept}/>
      </>
	 )
}

export default Product;
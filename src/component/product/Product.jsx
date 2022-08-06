import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import Data,{ accept } from '../common';
import PendingRequest from '../pendingrequest/PendingRequest';
import './product.css';



const Product = ()=>{
  const selector = useSelector(state => state.productlistReducer.payload);
  const [data,setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const dataPerPage = 5;
  var val = 0

    const lastIndex = currentPage*dataPerPage;

  const firstIndex = currentPage*dataPerPage-dataPerPage;

  const sliceData = selector && selector.length>0 ? selector.slice(firstIndex,lastIndex) : [];

  console.log("sliceData",sliceData)
  for(var i=0;i<Math.ceil(Data.length/dataPerPage);i++) {
    val=i;
  }

  




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
                        <img className="col-md-12" src={data.imageUrl} alt='data'/>
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
import React,{useState,useEffect} from "react";
import './pagination.css'



const Pagination = (props) => {
    const { totalNumberOfPages, handleNextPage,handlePreviousPage,handlePageNumber } = props
    const [pages,setPages] = useState([])
 
    useEffect(()=>{
    setPages(new Array(totalNumberOfPages).fill(null).map((v,i)=>i))
    },[])

   

    return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          
          <li className="page-item" >
            <a className="page-link" onClick={handlePreviousPage} >
              Previous
            </a>
          </li>
          
          {
           pages.map((pageIndex)=> {
           return  <li className="page-item" key={pageIndex} >
             <a className="page-link" onClick={()=>handlePageNumber(pageIndex+1)} >
               { pageIndex + 1}
             </a>
           </li>
          })}
         
         {/* { pages === []?<p>no data</p>:<p>{pages.map((v,i)=>{})}</p>} */}
          
          <li className="page-item" onClick={handleNextPage}>
            <a className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

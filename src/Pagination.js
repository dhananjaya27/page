import React, { useEffect, useState } from 'react'
import './App.css'
function Pagination({showPerPage,onPaginationChange,total}) {

  //for set default number of buttom
    const[counter,setcounter]=useState(1)

    const[numofbuttom,setnumofbuttom]=useState(Math.ceil(total/showPerPage))
   //when ever pagenumber is change data will render according to page number
    useEffect(()=>{
    const value=counter*showPerPage;
    onPaginationChange(value-showPerPage,value)
    },[counter])

    //logic for previous buttom
    function onButtonClicked(type){
        if(type==='prev'){
            if(counter===1){
                setcounter(1)
            }
            else{
                setcounter(counter-1)
            }
        }
        //logic for next buttom
        else if(type==="next"){
            if(numofbuttom===counter){
                setcounter(counter);
            }
            else{
                setcounter(counter + 1);
            }
        }
    };
    
  return (
    <nav aria-label="Page navigation example">
  <ul className="pagination" >
    <li className="page-item"><a className="page-link" href="!#" onClick={()=>onButtonClicked("prev")}>Previous</a></li>
  {/* dynamically show buttom number when ever data will be increased */}
    {new Array(numofbuttom).fill('').map((element,index)=>{
        return(
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}><a className="page-link" href="!#" 
            onClick={() => setcounter(index + 1)}>
                {index+1}
                </a></li>
        )
    })}
   
   
    <li className="page-item"><a className="page-link" href="!#"  onClick={()=>onButtonClicked("next")}>Next</a></li>
  </ul>
</nav>
  )
}

export default Pagination
import data from "./data.js"
import { useState } from "react";
export default function Accordian(){

    const [key, setKey]=useState("");

    function onClickHandler(item){
        setKey(item);
    }
    return (
       
       <div>
        {data &&  data.length > 0 ? (
           data.map((item)=> (
              <div>
              <div>{item.heading}</div>
             {
             key===item.id?(<div>{item.description}</div>):(
                <span><button onClick={()=>onClickHandler(item.id)}>+</button></span>
                
             )
              }
              </div>
           ))
        )
        
        
        : (<div>no data</div>)}
       </div>
    )
}


{/* ERROR: <span><button onClick={onClickHandler(item.id)}>+</button></span> */}
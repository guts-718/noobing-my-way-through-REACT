
import data from "./data.js"
import { useState } from "react";
export default function Accordian(){

    const [key, setKey]=useState("");
    const [isMultiSelection,setIsMultiSelection]=useState(false);
    const [multiKey,setMultiKey]=useState([]);

    function onClickHandler(item){
        setKey(item);
        if(!multiKey.includes(item)){
            let temp=[...multiKey];
            temp.push(item);
            setMultiKey(temp);
        }
    }

    function toggleSelection(){
        setMultiKey([]);
        if(key){
            let temp=[key];
            setMultiKey(temp);
        }
        setIsMultiSelection(!isMultiSelection)
        //  setIsMultiSelection(isMultiSelection=>{
        //     !isMultiSelection
        //  })
    }

    // useEffect(()=>{
        
    // },[])
    return (
       
       <div>
        <button onClick={toggleSelection}>{isMultiSelection?"Disable":"Enable"} Multi Selection</button>
        {data &&  data.length > 0 ? (
           data.map((item)=> (
              <div>
              <div>{item.heading}</div>
             {
             ((isMultiSelection==false && key===item.id)||(isMultiSelection==true && multiKey.includes(item.id)))?(<div>{item.description}</div>):(
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


/*
GPT VERSION:::

import data from "./data.js";
import { useState } from "react";
import "./accordion.css";

export default function Accordion() {
  const [openItems, setOpenItems] = useState([]);
  const [isMultiSelection, setIsMultiSelection] = useState(false);

  function toggleItem(id) {
    if (isMultiSelection) {
      setOpenItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    } else {
      setOpenItems(prev => (prev[0] === id ? [] : [id]));
    }
  }

  function toggleSelectionMode() {
    setOpenItems([]);
    setIsMultiSelection(prev => !prev);
  }

  return (
    <div className="accordion-container">
      <button className="mode-btn" onClick={toggleSelectionMode}>
        {isMultiSelection ? "Disable" : "Enable"} Multi Selection
      </button>

      {data && data.length > 0 ? (
        data.map(item => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
            >
              <h3>{item.heading}</h3>
              <span>{openItems.includes(item.id) ? "−" : "+"}</span>
            </div>

            {openItems.includes(item.id) && (
              <div className="accordion-content">
                {item.description}
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}



*/
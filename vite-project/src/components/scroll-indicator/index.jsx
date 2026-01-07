// import {useState} from "react";
// import countries from "./data";
// import "./style.css"

// export default function ScrollIndicator(){
//     const [screenSz, setScreenSz]=useState(1280);
//     const [curPos,setCurPos]=useState(50);

//     function pos(){
//         console.log(window.scrollY);
//     }
//     //onscroll(setCurPos(window.scrollY/screenSz));
//     return <div>
//     <h1>Countries</h1>
//     <div className="strip" style={{backgroundColor: "#ffff00"}}>
//         <div style={{height:'10px',width:`${curPos}%`, backgroundColor:'#ff4500' }}></div>
//     </div>
//     <div>
//     {
//       countries.map(country=>(
//         <div>{country}</div>
//       ))
    
//     }
//     </div>
//     <button onClick={pos}></button></div>
// }


import { useState, useEffect } from "react";
import countries from "./data";
import "./style.css";

export default function ScrollIndicator() {
  const [screenSz, setScreenSz] = useState(
    document.documentElement.scrollHeight - window.innerHeight
  );
  const [curPos, setCurPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setScreenSz(maxScroll);
      setCurPos((scrollTop / maxScroll) * 100);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function pos() {
    console.log(window.scrollY);
  }

  return (
    <div className="sticky">
      <h1>Countries</h1>

      <div className="strip" style={{ backgroundColor: "#ffff00" }}>
        <div
          style={{
            height: "10px",
            width: `${curPos}%`,
            backgroundColor: "#ff4500"
          }}
        ></div>
      </div>

      <div>
        {countries.map((country, i) => (
          <div key={i}>{country}</div>
        ))}
      </div>

      <button onClick={pos}>Log Scroll</button>
    </div>
  );
}

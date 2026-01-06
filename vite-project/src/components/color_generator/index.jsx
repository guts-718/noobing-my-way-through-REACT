import {useState} from "react";
import "./style.css"

export default function Color(){
    const [isHex,setIsHex]=useState(true);
    const [hexCol,setHexCol]=useState("#ffffff");
    const [rgbCol,setRgbCol]=useState("rgb(255,255,255)")

    function hex(){
        setIsHex(true);
    }

    function RGB(){
        setIsHex(false);
    }

    function showColor(){
        if(isHex){
            return hexCol;
        }else return rgbCol;
    }

    function generateRandom(){
        let col="";
        let choose="0123456789ABCDEF";
        if(isHex===true){
            col+="#";
            for(let i=0;i<6;i++){
                let j=Math.floor(Math.random()*(choose.length));
                col+=choose[j];
            }
            setHexCol(col);
            console.log(col);

        }else{
            let col="rgb(";
            for(let i=0;i<3;i++){
                let j=Math.floor(Math.random()*256);
                col+=j.toString();
                if(i!==2)col+=",";
            }
            col+=")";
            setRgbCol(col);
            console.log(col);
        }
        
    }
    return (
       <div className="container" style={{ backgroundColor: showColor() }}>
            <button onClick={hex}>
                Create Hex Color
            </button>
            <button onClick={RGB}>
                Create RGB color
            </button>
            <button onClick={generateRandom}>
                Generate random
            </button>
            <div>
                {showColor()}
            </div>

        </div>
        
    )
}
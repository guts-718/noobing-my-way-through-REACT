import {useEffect, useState} from "react";



export default function ScrollTopAndBottom(){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null)
    const [scrrenY,setScreenY]=useState(1280)
    const url='https://dummyjson.com/users?limit=5&skip=10&select=firstName,age'
    

    function scroll(str){
        if(str=='top'){
            window.scrollTo('Y',0);
        }else{
            window.scrollTo('Y',1800);
            // should have used screenY but that wasn't going to complete bottom
        }
    }
    async function fecthData(url){

        setLoading(true);
        try{
            const response=await fetch(url);
            const dat=await response.json();
            setData(dat.users);
            console.log(dat);
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setError(e.message);
            setLoading(false);
        }

        
    }

    console.log(data);

    useEffect(()=>{
        setScreenY(window.screen.width)
    },[])
    console.log("this is the screen y", scrrenY);
    useEffect(()=>{
        fecthData('https://dummyjson.com/users?limit=100');
    },[url])

    if(loading){
        <div>wait on !!!</div>
    }

    return <div>
        <h1>this is the scroll top and bottom component</h1>
        <button onClick={()=>scroll("bottom")}>scroll to bottom</button>
        {
            data && data.length>0 ? (
                data.map((item)=>(
                    <div>{item.firstName}</div>
                ))
            ) : (null)
        }
        <button onClick={()=>scroll("top")}>scroll to top</button>
    </div>
}
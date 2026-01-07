import {useState, useEffect} from 'react';
import './style.css'

export default function LoadMoreData({url,batch=25, limit=100}){
    const [isLoading,setIsLoading]=useState(false);
    const [count,setCount]=useState(batch);
    const [data,setData]=useState([])
    const [errMsg,setErrMsg]=useState('');

    function addmore(){
        let cur=count+batch;
        setCount(cur);
        if(count>limit)return;
         
         fetchData();
    }
    async function fetchData() {
    try {
        setIsLoading(true);

        const response = await fetch(
        `https://dummyjson.com/products?limit=${25}&skip=${count - batch}&select=title,price,images`
        );
   
        const dat = await response.json();
        setData(prev => [...prev, ...dat.products]);
       // setData(prev => Array.from(new Set(...prev, ...dat.products)));
        setIsLoading(false);

    } catch (error) {
        setErrMsg(error.message);
        setIsLoading(false);
    }
    }

  
    function small_title(title){
        if(title.length<20)return title;
        return title.slice(0, 20)+"...";
    }

    if(isLoading){
        return <div>wait on</div>
    }

    console.log(data);


    return (
        <>
    <div className="heading">Product Store</div>
    <div className="container">

        
        {data &&
        data.map(item => (
            <div key={item.id} className="card">
            <img
                className="image"
                src={item.images && item.images[0]}
                alt={item.title}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="title">{small_title(item.title)}</span>
            <span className="price">${item.price}</span>
            </div>

            
            </div>
        ))}

        <button
        onClick={addmore}
        disabled={count > limit}
        className={count > limit ? "disabled" : ""}
        >
        {count <= limit
            ? "Add More Products"
            : `Can't load more than ${limit}`}
        </button>

        
    </div>
   
    </>
    );

}
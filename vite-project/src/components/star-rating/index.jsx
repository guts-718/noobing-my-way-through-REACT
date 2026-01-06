import {FaStar} from 'react-icons/fa';
import {useState} from 'react'

export default function StarRating({noOfStars=5}){
    const [rating, setRating]=useState(0);
    function handleStarClick(index){
        setRating(index);

    }

    function col(index){
        if(index<=rating)return " #FFFF00";
        else return "#000"
    }
    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index)=>{
                return <FaStar style={{color:col(index+1)}}
                key={index+1}
                onClick={()=> handleStarClick(index+1)}
                onMouseMove={()=> handleStarClick(index+1)}
                size={40}
                
                
                
                />
            })
        }


    </div>
}
import React, {useEffect, useState} from 'react';
import Feedback from './card2';
import './card1.css'


function Card1() {
    const urlPath = 'https://eptome-parlor.herokuapp.com/testimonials'

    const [data, setData] = useState([])

   
useEffect(()=>{
    fetch(urlPath)
    .then(res=>res.json())
    .then(json =>{
        setData(json)
    })
}, [])


    // const scrollLeft = () => {
    //      console.log("moved left");
    //     };
    //     const scrollRight = () => {
    //         console.log("moved right");
    // };

    return(
        <div className='main'>
            {/* <span id="left" onClick={scrollLeft}>&lt;</span> */}
            <div className='maindiv'>
            
            
            

             {data.map((reviews)=>( 
                <span key={reviews.id} className='card'>
                    <div className='image'><img src={reviews.imageURL} alt={reviews.name} /></div>
                    <div classname='words'>
                       <div className='nameRating'>
                       <h3 className='h3'>{reviews.name}</h3>
                        <h4 className='rating'>rating: {reviews.rating}</h4>
                        
                    </div> 
                    <hr />

                <em className='content'> ~ {reviews.message}</em>
                
                </div>
                </span>

            ))} 
            </div>
            {/* <span id="right" onClick={scrollRight}>&gt;</span> */}
                <Feedback />
        </div>
    )
}
export default Card1 
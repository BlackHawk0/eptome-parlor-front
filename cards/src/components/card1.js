import React, {useEffect, useState} from 'react';
import './card1.css'


function Card1() {
    const urlPath = 'http://localhost:5000/reviews'

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
                    <div className='image'><img src={reviews.imageurl} alt={reviews.name} /></div>
                    <div classname='words'>
                       <div className='nameRating'>
                       <h3>{reviews.name}</h3>
                        <h4 className='rating'>{reviews.rating}</h4>
                        
                    </div> 
                    <hr />
                <h3 className='title'>{reviews.title}</h3>
                <em className='content'> ~ {reviews.content}</em>
                
                </div>
                </span>

            ))} 
            </div>
            {/* <span id="right" onClick={scrollRight}>&gt;</span> */}
        </div>
    )
}
export default Card1
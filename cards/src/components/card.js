import React, {useEffect, useState} from 'react';


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



    return(
        <div className='main'>
            <div className='maindiv'>
            
            </div>
            

             {data.map((reviews)=>( 
                <div key={reviews.id} className='card'>
                    <div className='image'><img src={reviews.image} /></div>
                <h4>{reviews.rating}</h4>
                <h3>{revies.title}</h3>
                <em> ~ {reviews.content}</em>
                </div>

            ))} 
        </div>
    )
}
export default Card1
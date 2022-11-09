import React, { useState } from "react";
import './ReviewCard.css'

export default function ReviewCard({ review:{name, body }}) {

    const [likeActive, setLikeActive] = useState(false)

    function liked () {
        if(likeActive) {
            setLikeActive(false)
        } else{
            setLikeActive(true)
        }
    }

    return(
        <div className="card">
      <h3>My Name is {name}</h3>
      <p>{body}</p>
      <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} >Like &#x2661;</button>
        </div>
    )
}
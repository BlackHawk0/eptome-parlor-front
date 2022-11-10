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
            <div className="upvotes">
            <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} > &#x21E7;</button> <br />
            {/* <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} > &#x21E9;</button> */}
            </div>
        </div>
    )
}
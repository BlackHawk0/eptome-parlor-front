import React, { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard"
import './Reviews.css'

export default function Reviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
            fetch('https://my-json-server.typicode.com/StephenKairu/dummydbserver/Reviews')
              .then((response) => response.json())
              .then(reviews => setReviews(reviews))
            //   .then((comments) => comments.forEach(review => renderOneReview(review)));
    }, [])


	const handleNewReview = (review) => {
		setReviews([...reviews, review]);
	};

    return (
        <div className="reviews">
            <br /><br />
            <h2>Our Customers Say...</h2>
            {reviews.map((review) => (
					<ReviewCard key={review.id} review={review} />))}
            <ReviewForm handleNewReview={handleNewReview} reviews={reviews}/>
        </div>
    );
}
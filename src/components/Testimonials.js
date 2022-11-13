import React, { useEffect, useState }  from 'react'
import './testimonial.css'
const Testimonials = () => {
   const [testimonials, setTestimonials] = useState([])
   useEffect(() => {
      const fetchTestimonials = async () => {
         const response = await fetch('https://eptome-parlor.herokuapp.com/testimonials')
         const data = await response.json()
         setTestimonials(data)
         console.log(data)
      }
      fetchTestimonials()
   }, [])
   return (
      <div>
         <div className="testimonials-container">
            {testimonials.slice(0,4).map(testimonial => (
               <div className="testimonial" key={testimonial.id}>
                  <img src={testimonial.imageURL} alt="testimonial"/>
                  <div className="testimonial-info">
                     <h3>{testimonial.name}</h3>
                     <h3>{testimonial.message}</h3>
                     <h3>Rating: {testimonial.rating}</h3>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
export default Testimonials

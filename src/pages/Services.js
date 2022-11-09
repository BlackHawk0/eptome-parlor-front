import React from 'react';
import '../components/Services.css';
import ServiceCard from '../components/ServiceCard'
// import Navbar from './../components/Navbar'
import ReviewForm from '../components/ReviewForm'

const Services = () => {
  return (
    <div className='services-page'>
        {/* <Navbar /> */}
        <div>
        <h1 className='heading'>BEAUTY AND SPA CENTER</h1>
        <p className='service-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.</p>
        </div>
        <ServiceCard />
    <div className='offers-div'>
        <div>
        <h2 className='offers-heading'>Our Special Offers</h2>
        <p className='offers-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
        <div className='offers-image'>
            <img src="https://img.freepik.com/free-photo/spa-treatment-dark-wall_176420-8983.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph" alt="massage-oils" />
        </div>
    </div>
    <div className='reviews-div'>
        <ReviewForm />
        <div className='reviews-card'></div>
    </div>
    </div>
  )
}

export default Services
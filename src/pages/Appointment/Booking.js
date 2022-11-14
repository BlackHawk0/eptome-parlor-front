import React, {useState} from 'react'
import { useEffect } from "react";
import Bookings from './Bookings';

const Booking = () => {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch('https://eptome-parlor-o1.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    const update = (id, data) =>{
      console.log('data arrived');
      console.log(data);
      fetch(`https://eptome-parlor-o1.herokuapp.com/bookings/${id}`, 
      {
        method: 'PATCH',
        headers:{
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify ({
          customer_name: data.customer_name,
          customer_phonenumber: data.customer_phonenumber,
          customer_email: data.customer_email,
          booked_service: data.booked_service,
          booked_date: data.booked_date
        })
      })
      .then(res => res.json())
      .then(data => setBookings(data))
    }
    const onDelete =(id) =>{
      fetch(`https://eptome-parlor-o1.herokuapp.com/bookings/${id}`, 
      {
        method: 'DELETE',
        headers:{
          'Content-Type': 'Application/json',
        }
      })

    }
  return (
    <div className='max-w-screen-lg m-auto'>
      <div>
        <div className='flex flex-row justify-between items-center bg-[#f9a8d4] rounded-lg font-bold mx-4 my-8 py-3 px-4 shadow-sm'>
            <p>#</p>
            <p className='-ml-16'>Name</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p >Service</p>
            <p >Date  </p>
            <p >Edit</p>
            <p >Delete</p>
        </div>
      </div>
        {bookings.map((booking)=>(
            <Bookings
            key ={booking.id}
            booking_id = {booking.id}
            customer_name = {booking.customer_name}
            customer_phonenumber = {booking.customer_phonenumber}
            customer_email = {booking.customer_email}
            booked_service = {booking.booked_service}
            booked_date = {booking.booked_date}
            update ={update}
            deletion ={onDelete}
            />
        ))}
    </div>
  )
}

export default Booking;
import React, {useState} from 'react'
import { useEffect } from "react";
import Bookings from './Bookings';

const Booking = () => {
    const [bookings, setBookings] = useState([])
    useEffect(()=>{
        fetch('http://localhost:9292/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    console.log(bookings)
  return (
    <div>
        {bookings.map((booking)=>(
            <Bookings
            key ={booking.id}
            booking_id = {booking.id}
            customer_name = {booking.customer_name}
            customer_phonenumber = {booking.customer_phonenumber}
            customer_email = {booking.customer_email}
            booked_service = {booking.booked_service}
            booked_date = {booking.booked_date}
            />
        ))}
    </div>
  )
}

export default Booking;
import React, {useState, useEffect} from "react";
import Axios from "axios"


function Booking() {

    const urlPath = 'https://eptome-parlor.herokuapp.com/services'

    const [service, setService] = useState([])

   
useEffect(()=>{
    fetch(urlPath)
    .then(res=>res.json())
    .then(json =>{
        setService(json)
    })
}, [])


    // const [addText, setAddText] = useState('')
    const url = 'https://eptome-parlor.herokuapp.com/booking/new'
    const [data, setData] = useState({
        name: ' ',
        email: ' ',
        Tel: ' ',
        date: ' ',
        service : ' '
      })

      function handle(e) {
        const newData = {...data}
        newData[e.target.id] = [e.target.value]
        setData(newData)
        console.log(newData)
      }


      function addDataForm(e) {
        e.preventDefault()

        
        Axios.post(url, {
          name: data.customer_name,
          email : data.customer_email,
          tel : data.customer_phonenumber,
          date: data.booked_date,
          service : data.service_id
        })
        .then(res=>console.log(res))

        e.reset()
    }
    

    return(
        <div className="div">
            <h3 className="book">Book a Date</h3>
            <br />
            <form  onSubmit={(e)=>addDataForm(e)}>
            {/* <div className="div"> */}
      
               <span><p className="label">Name</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.customer_name} required name="title" placeholder="title" /></span> 
               <span><p className="label">Email</p><input onChange={(e)=>handle(e)} type='email' id="title" value={data.customer_email} required name="title" placeholder="title" /></span> 
               <span><p className="label">Tel</p><input onChange={(e)=>handle(e)} type='tel' id="title" value={data.customer_phonenumber} required name="title" placeholder="title" /></span>
               <span><p className="label">Date</p><input onChange={(e)=>handle(e)} type='date' id="title" value={data.booked_date} required name="title" placeholder="title" /></span>
               <span><select onChange={(e)=>handle(e)}><option>{data.service_id}</option></select></span>

                {/* </div> */}
               <span><input onChange={(e)=>handle(e)} type='submit'  className="submit"/></span> 
            </form>
            <h2 className="label">Service</h2>
               <div>
               {service.map((service)=>( 
                
                <p key={service.id}>{service.service_name}: {service.id}</p>
            ))} 
               </div>
            
        </div>
    )
}
export default Booking
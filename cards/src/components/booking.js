import React, {useState} from "react";
import Axios from "axios"


function NewPost() {

    // const [addText, setAddText] = useState('')
    const url = 'https://eptome-parlor.herokuapp.com/booking#'
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
            <h3>New Posts</h3>
            <br />
            <form  onSubmit={(e)=>addDataForm(e)}>
                <input type/>
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.customer_name} required name="title" placeholder="title" />
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='email' id="title" value={data.customer_email} required name="title" placeholder="title" />
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='tel' id="title" value={data.customer_phonenumber} required name="title" placeholder="title" />
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='date' id="title" value={data.booked_date} required name="title" placeholder="title" />
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.service_id} required name="title" placeholder="title" />
               
                
                <input onChange={(e)=>handle(e)} type='submit'  className="submit"/>
            </form>
        </div>
    )
}
export default NewPost
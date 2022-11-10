import React, {useState} from "react";
import Axios from "axios"


function Feedback() {

    const url = 'https://eptome-parlor.herokuapp.com/reviews'
    const [data, setData] = useState({
        name: ' ',
        image: ' ',
        rating: ' ',
        message: ' '
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
          name: data.name,
          image : data.imageURL,
          rating : data.rating,
          message: data.message,
        })
        .then(res=>console.log(res))

        e.reset()
    }
    

    return(
        <div className="div">
            <h3 className="book">we would love your feedback</h3>
            <br />
            <form  onSubmit={(e)=>addDataForm(e)}>
      
               <span><p className="label">Name</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.name} required name="title" placeholder="title" /></span> 
               <span><p className="label">Email</p><input onChange={(e)=>handle(e)} type='file' id="title" value={data.imageURL} required name="title" placeholder="title" /></span> 
               <span><p className="label">Tel</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.message} required name="title" placeholder="title" /></span>
               <span><p className="label">Date</p><input onChange={(e)=>handle(e)} type='number' id="title" value={data.rating} required name="title" placeholder="title" /></span>
               <span><input onChange={(e)=>handle(e)} type='submit'  className="submit"/></span> 
            </form>
        </div>
    )
}
export default Feedback
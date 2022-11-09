import React, {useState} from "react";
import Axios from "axios"


function NewPost() {

    // const [addText, setAddText] = useState('')
    const url = 'https://lit-depths-86097.herokuapp.com/blogs'
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
          name: data.customer,
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
                <p className="label">Title</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.title} required name="title" placeholder="title" />
                
                <p className="label">Content</p>
                <input onChange={(e)=>handle(e)} type='text' id="content" value={data.content} required name="content" placeholder="enter your content"/>
                
                <p className="label">Author</p>
                
                <input onChange={(e)=>handle(e)} type='text' id="author" value={data.author} required name="author" placeholder=" ~anonymous"/>
                
                <input onChange={(e)=>handle(e)} type='submit'  className="submit"/>
            </form>
        </div>
    )
}
export default NewPost
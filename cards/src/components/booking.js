// import React, {useState} from "react";
// import Axios from "axios"


// function NewPost() {

//     // const [addText, setAddText] = useState('')
//     const url = 'https://lit-depths-86097.herokuapp.com/blogs'
//     const [data, setData] = useState({
//         name: ' ',
//         email: ' ',
//         Tel: ' ',
//         date: ' ',
//         service : ' '
//       })

//       function handle(e) {
//         const newData = {...data}
//         newData[e.target.id] = [e.target.value]
//         setData(newData)
//         console.log(newData)
//       }
    

//       function addDataForm(e) {
//         e.preventDefault()
        
//         Axios.post(url, {
//           name: data.customer_name,
//           email : data.customer_email,
//           tel : data.customer_phonenumber,
//           service : data.likes
//         })
//         .then(res=>console.log(res))

//         e.reset()
//     }
    
//     t.string "customer_name"
//     t.string "customer_phonenumber"
//     t.string "customer_email"
//     t.datetime "booked_date", precision: nil
//     t.integer "service_id"
//     t.datetime "created_at", null: false
//     t.datetime "updated_at", null: false

//     return(
//         <div className="div">
//             <h3>New Posts</h3>
//             <br />
//             <form  onSubmit={(e)=>addDataForm(e)}>
//                 <p className="label">Title</p><input onChange={(e)=>handle(e)} type='text' id="title" value={data.title} required name="title" placeholder="title" />
                
//                 <p className="label">Content</p>
//                 <input onChange={(e)=>handle(e)} type='text' id="content" value={data.content} required name="content" placeholder="enter your content"/>
                
//                 <p className="label">Author</p>
                
//                 <input onChange={(e)=>handle(e)} type='text' id="author" value={data.author} required name="author" placeholder=" ~anonymous"/>
                
//                 <input onChange={(e)=>handle(e)} type='submit'  className="submit"/>
//             </form>
//         </div>
//     )
// }
// export default NewPost
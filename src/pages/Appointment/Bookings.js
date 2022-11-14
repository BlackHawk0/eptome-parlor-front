import React, {useState} from 'react'
const Bookings = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [newBooking, setnewBooking] = useState({
        customer_name: props.customer_name,
        customer_phonenumber: props.customer_phonenumber,
        customer_email: props.customer_email,
        booked_service: props.booked_service,
        booked_date: props.booked_date
    })

    const handleEdit = () =>{
        setIsEditing(true)
    }

    const handleDelete =() =>{
        props.deletion(props.booking_id)
    }

    const handleChange = (e) =>{
        setnewBooking({
            ...newBooking,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        // e.preventDefault();
        props.update(props.booking_id, newBooking)
        setIsEditing(false)
    }



    if(isEditing){
        return(
            <div className='flex'>
                <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    name='customer_name'
                    placeholder='Your Name'
                    value={newBooking.customer_name}
                    onChange={handleChange}
                    />
                    <input 
                    type='text'
                    name='customer_phonenumber'
                    placeholder='Phone Number'
                    value={newBooking.customer_phonenumber}
                    onChange={handleChange}
                    />
                    <input 
                    type='text'
                    name='ustomer_email'
                    placeholder='Email'
                    value={newBooking.customer_email}
                    onChange={handleChange}
                    />
                    <input 
                    type='text'
                    name='booked_service'
                    placeholder='Service'
                    value={newBooking.booked_service}
                    onChange={handleChange}
                    />
                    <input 
                    type='text'
                    name='booked_date'
                    placeholder='Date'
                    value={newBooking.booked_date}
                    onChange={handleChange}
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }
    return (
        <div className='flex justify-between item-center bg-[#bfdbfe] rounded-lg mx-4 my-8 py-3 px-4 shadow-sm'>
        <p>{props.booking_id}</p>
        <p>{props.customer_name}</p>
        <p>{props.customer_phonenumber}</p>
        <p>{props.customer_email}</p>
        <p>{props.booked_service}</p>
        <p>{props.booked_date}</p>
        <button onClick={handleEdit}>
            <i className='fa fa-edit' ></i>
        </button>  
        <button onClick={handleDelete}>
            <i className='fa fa-trash' ></i>
        </button>  
        </div>

    )
}
export default Bookings;






// import React, {useState} from 'react'
// const Bookings = (props) => {
//     const [isEditing, setIsEditing] = useState(false)
//     const [newBooking, setnewBooking] = useState({
//         customer_name: props.customer_name,
//         customer_phonenumber: props.customer_phonenumber,
//         customer_email: props.customer_email,
//         booked_service: props.booked_service,
//         booked_date: props.booked_date
//     })
//     const handleChange = (e) =>{
//         setnewBooking({
//             ...newBooking,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         props.update(props.booking_id, newBooking)
//         setIsEditing(false)
//     }
//     const handleDelete = () =>{

//     }
//     return (
//         <div className='flex justify-between item-center rounded-lg mx-4 my-8 py-3 px-4 shadow-sm'>
//             <p>{props.booking_id}</p>
//             <p>{props.customer_name}</p>
//             <p>{props.customer_phonenumber}</p>
//             <p>{props.customer_email}</p>
//             <p>{props.booked_service}</p>
//             <p>{props.booked_date}</p>
//             <button onClick={()=>setIsEditing(!isEditing)}>
//                 <i className='fa fa-edit' ></i>
//             </button>
//             <p>
//             <button onClick={handleDelete}>
//                 <i className='fa fa-trash' ></i>
//             </button>
//             </p>

        
//             {isEditing && (
//                 <form className='flex flex-col items-center' onSubmit={handleSubmit}>
//                     <input 
//                     type='text'
//                     name='customer_name'
//                     value={newBooking.customer_name}
//                     onChange={handleChange}
//                     />
//                     <input 
//                     type='text'
//                     name='customer_phonenumber'
//                     value={newBooking.customer_phonenumber}
//                     onChange={handleChange}
//                     />
//                     <input 
//                     type='text'
//                     name='customer_email'
//                     value={newBooking.customer_email}
//                     onChange={handleChange}
//                     />
//                     <input 
//                     type='text'
//                     name='booked_service'
//                     value={newBooking.booked_service}
//                     onChange={handleChange}
//                     />
//                     <input 
//                     type='text'
//                     name='booked_date'
//                     value={newBooking.booked_date}
//                     onChange={handleChange}
//                     />
//                     <button>Save</button>
//                 </form>
//             )}
//         </div>
//     )
// }

// export default Bookings;
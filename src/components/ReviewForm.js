import React,{useState} from "react";

export default function AddReviewForm ({handleNewReview}) {
    const [formData,setFormData]=useState([{
        name:"",
        email: "",
        body:"",
      }])
    
      const handleSaveReview = async (e) => {
            e.preventDefault();
            console.log(formData);
                const res = await fetch("https://my-json-server.typicode.com/StephenKairu/dummydbserver/Reviews", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        body: formData.body,
                    }),
                });
                const response = await res.json();
                handleNewReview(response);
                setFormData([{
                  name:"",
                  email: "",
                  body:"",
                }]);
        };
    
      function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
      }

    return (
        <div className="reviews">
            <div id="reviews-container">
                <div className="review-card">
                </div>
                <div className="form">
                  <br /> <br />
                    <h3>Satisfied with our service?</h3>
                    <form onSubmit={handleSaveReview} className="comment-form">
                    Name: <br/><input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Your name?" className="client-name" required /> <br/> <br/>
                    Email: <br/><input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Your email won't be published" className="email-input" required /> <br/><br/>
                    Comment: <br/>
                    <textarea value={formData.body} onChange={handleChange} name="body" className="client-text" cols="30" rows="6" placeholder="Leave a review..." required></textarea><br/><br/>
                    <button type="submit" className="buttn">Submit Review</button>
                    </form>
                </div>
            </div>    
        </div>
    );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function MultilineTextFields() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('Controlled');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <br />
//         <TextField
//           id="filled-multiline-flexible"
//           label="Name"
//           multiline
//           maxRows={4}
//           value="Your name"
//           onChange={handleChange}
//           variant="filled"
//         />
//         <br /> <br /> <br />
//         <TextField
//           id="filled-textarea"
//           type="email"
//           label="Your Email"
//           placeholder="Email"
//           multiline
//           variant="filled"
//         /> <br /> <br /> <br />
//         <TextField
//           id="outlined-multiline-static"
//           label="Your Comment"
//           multiline
//           rows={4}
//           defaultValue="Leave us a review..."
//           variant="outlined"
//         />
//       </div>
//     </form>
//   );
// }


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function IconLabelButtons() {
//   const classes = useStyles();

//   return (
//     <div>
      // <Button
      //   variant="contained"
      //   color="primary"
      //   className={classes.button}
      //   endIcon={<Icon>send</Icon>}
      // >
      //   Send
      // </Button>
//     </div>
//   );
// }

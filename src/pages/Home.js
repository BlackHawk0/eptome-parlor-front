import React from 'react'
import {Grid, Typography, Box, Button} from '@mui/material'
import Footer from '../components/Footer'
import Navbar from './../components/Navbar'
import heroine from './../assets/heroine.png'
import seniorFemale from './../assets/senior-female.png'
import rectangle from './../assets/Rectangle.svg'
import { styled } from "@mui/material/styles";

const containerStyles = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
})

const Home = () => {
  return (
    <div>
        <Navbar />   
             {/*Landing section  */}
            <Grid
            container sx={{
            backgroundImage: `url(${heroine})`,
            position: "relative",
            pt: "50vh",
            height: "80vh",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          justify="space-between"
          spacing={8}
        >
          <Grid
            item
            md={7}
            sm={8}
            display={{ xs: "none", sm: "block" }}
            paddingTop={{ sm: "64px", xs: "0" }}
            className="left"
          >
            <Grid
              item
              className="banner-img_container"
              data-aos="fade-up"
              data-aos-duration="3000"
              flexDirection="column"
              justify="center"
              alignItems="center"
              display="flex"
              sx={{ pb: "3rem" }}
            >
            
              <Box
                className="text-container"
                width="80%"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
              <Button
              sx = {{
                boxShadow: 'none',
                textTransform: 'none',
                fontSize: 20,
                padding: '18px 20px',
                width: '15rem',
                border: '1px solid',
                lineHeight: 2.5,
                backgroundColor: '#000000',
                borderColor: '#ffffff',
                color: '#ffffff',
              }}
              >Booking</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
{/* We provide section  */}
        <Grid container spacing={{ xs: 1, sm: 1, md: 2 }}
        pt = "3rem"
        pb = "3rem"
        >
          <Grid item xs={5} >
            <img src={seniorFemale} alt= "About Epitome"/>
          </Grid>
        <Grid item xs={5}>
          <Box>
            <h3>We Provide</h3>
            <h2>when you look good you feel good</h2>
            <Typography>Spread over two floors, our beautiful 
              spa offer a soothing environment in which you can rest, 
              relax and feel competely rejuvenated.
            </Typography>
            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and eentially unchanged.
            </Typography>
          </Box>
        </Grid>
        </Grid>
        {/* View more section */}
        <Grid container spacing={{ xs: 1, sm: 1, md: 1 }}
        backgroundColor ="#D9D9D9"
        pt = "3rem" 
         >
        <Grid item xs={3}>
            <img src={rectangle} alt="facial"/>
            <Typography>Infrared Sauna</Typography>
            <Typography>Kes 20,000</Typography>

        </Grid>
        <Grid item xs={3}>
        <img src={rectangle} alt="facial"/>
            <Typography>LED Facial</Typography>
            <Typography>Kes 6,000</Typography>
        </Grid>
        <Grid item xs={3}>
        <img src={rectangle} alt="facial"/>
            <Typography>Anti-Aging Facial</Typography>
            <Typography>Kes 10,000</Typography>
        </Grid>
        <Grid item xs={3}>
            <img src={rectangle} alt="facial"/>
            <Typography>Oxygen Facial</Typography>
            <Typography>Kes 7,000</Typography>
        </Grid>
        <Grid sx={{width: "100%", display: "flex", justifyContent: "center", pt: "2rem", pb: "2rem"}}>  
          <Button
          sx={{
            backgroundColor: "#A52A2A",
            padding: "15px 20px",
            color: '#ffffff',
            textAlign: "center", 
          }}
        >
          View More
          </Button>
          </Grid>
      </Grid>
      <Grid sx={{width: "100%", display: "flex", justifyContent: "center", pt: "2rem", pb: "1rem"}}>
          <h2>Testimonials</h2>
      </Grid>
      <Grid container spacing={{ xs: 1, sm: 1, md: 1 }}
      sx={{width: "100%", display: "flex", pt: "1rem", pb: "2rem", backgroundColor: "#D9D9D9"}}>
        <Grid item xs={4}>
        
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
      </Grid>
      <Footer />

    </div>
  )
}

export default Home
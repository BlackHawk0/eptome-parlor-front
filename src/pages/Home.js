import React from 'react'
import {Grid, Typography, Box, Button} from '@mui/material'
import Footer from '../components/Footer'
import Navbar from './../components/Navbar'
import heroine from './../assets/heroine.png'

const Home = () => {
  return (
    <div>
        <Navbar />        
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

        <Footer />

    </div>
  )
}

export default Home
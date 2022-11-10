import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
import heroine from "./../assets/heroine.png";
import seniorFemale from "./../assets/senior-female.png";
import appointment from "./../assets/appointment.png";
import { styled } from "@mui/material/styles";
import AppointmentForm from "../components/AppointmentForm";
import TopServices from "../components/TopServices";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const containerStyles = styled(Grid)({
  display: "flex",
  flexWrap: "wrap",
});

const Home = () => {
  return (
    <div>
      <Navbar />
      {/*Landing section  */}
      <Grid
        container
        sx={{
          backgroundImage: `url(${heroine})`,
          position: "relative",
          pt: "50vh",
          height: "80vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
                sx={{
                  boxShadow: "none",
                  textTransform: "none",
                  fontSize: 20,
                  padding: "18px 20px",
                  width: "15rem",
                  border: "1px solid",
                  lineHeight: 2.5,
                  backgroundColor: "#000000",
                  borderColor: "#ffffff",
                  color: "#ffffff",
                }}
              >
                Booking
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* We provide section  */}
      <Grid container spacing={{ xs: 1, sm: 1, md: 2 }} pt="3rem" pb="3rem">
        <Grid item xs={5}>
          <img src={seniorFemale} alt="About Epitome" />
        </Grid>
        <Grid item xs={5}>
          <Box>
            <h3>We Provide</h3>
            <h2>when you look good you feel good</h2>
            <Typography>
              Spread over two floors, our beautiful spa offer a soothing
              environment in which you can rest, relax and feel competely
              rejuvenated.
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. remaining
              essentially unchanged. It was popularised in the with theLorem
              Ipsum is simply dummy text of the printing and eentially
              unchanged.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* View more section */}

      <ServiceCard />

      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: "2rem",
          pb: "2rem",
        }}
      >
        <h2>Testimonials</h2>
      </Grid>
      <Grid
        sx={{
          backgroundImage: `url(${appointment})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Typography
            sx={{
              color: "#ffffff",
              marginBottom: "2rem",
              fontWeight: "500px",
              fontSize: "25px",
            }}
          >
            Book an Appointment
          </Typography>
          <Typography sx={{ color: "#ffffff", marginBottom: "2rem" }}>
            Please note our team will use the details shared to contact you
            within 24 hours
          </Typography>
        </div>

        <Grid
          sx={{
            backgroundColor: "#ffffff",
            width: "60%",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <AppointmentForm />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;

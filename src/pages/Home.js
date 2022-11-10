import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";
import heroine from "./../assets/heroine.png";
import seniorFemale from "./../assets/senior-female.png";
import appointment from "./../assets/appointment.png";
import { styled } from "@mui/material/styles";
import AppointmentForm from "../components/AppointmentForm";
import Reviews from "../components/Reviews";

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
        {/* <Navbar /> */}
        {/* <ServiceCard /> */}
        <img src="https://img.freepik.com/free-photo/beautiful-african-woman-smiling-resting-relaxing-spa-salon_176420-12883.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727&semt=sph" alt="" />
    </div>
  );
};

export default Home;

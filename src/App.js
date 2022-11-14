import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact";
import AppointmentForm from "./components/AppointmentForm";
import Login from "./pages/Login/Login";
import Booking from "./pages/Appointment/Booking";


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactpage" element={<Contact />} />
        <Route path="/appointments" element={<AppointmentForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      
    </div>
  );
}

export default App;
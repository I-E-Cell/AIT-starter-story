import React from "react";
import Navbar from "../../../components/Navbar";
import Carousel from "../../../components/Carousel";
import TimeLineFinal from "../../../components/TimeLine/TimeLineFinal";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";
import Slider from "../../../components/Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <TimeLineFinal/>
      <Footer/>
    </div>
  );
}

export default Home;

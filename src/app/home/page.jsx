import React from "react";
import Navbar from "../../../components/Navbar";
import Carousel from "../../../components/Carousel";
import TimeLineFinal from "../../../components/TimeLine/TimeLineFinal";
import Footer from "../../../components/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TimeLineFinal/>
      <Footer/>
    </div>
  );
}

export default Home;

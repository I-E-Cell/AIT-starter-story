import React from "react";
import Navbar from "../../../components/Navbar";
import Carousel from "../../../components/Carousel";
import Carousel2 from "../../../components/Carousel2";
import { Timeline } from "@mui/lab";
import TimeLine from "../../../components/TimeLine";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <TimeLine/>
    </div>
  );
}

export default Home;

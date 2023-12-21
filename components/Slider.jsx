import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="absolute top-20">
      <div>
        <Marquee speed={100} autoFill={true} pauseOnHover={true}>
          <div className="flex gap-7">
            <img
              width={200}
              height={40}
              src="prac-img\img1.jpeg"
              alt="img"
              className="ml-7"
            />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
          </div>
        </Marquee>
      </div>
      <div className="absolute mt-11">
        <Marquee
          direction="right"
          speed={50}
          autoFill={true}
          pauseOnHover={true}
        >
          <div className="flex gap-7">
            <img
              width={200}
              height={40}
              src="prac-img\img1.jpeg"
              alt="img"
              className="ml-7"
            />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
            <img width={200} height={40} src="prac-img\img1.jpeg" alt="img" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Slider;

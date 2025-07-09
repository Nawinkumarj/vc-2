import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <>
      <div className="bannerSection">
        <div className="Banner">
          <div className="Banner-text">
            <h1>a  Digital Craft Studio</h1>
            {/* <h1> Designing Digital DNa</h1> */}
          </div>
          {/* <div className="Banner-model">
          </div> */}
        </div>
        <div className="banner-video">
          <video src={assets.bannervideo} autoPlay loop/>
        </div>
      </div>
    </>
  );
};

export default Banner;

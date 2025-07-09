import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <>
      <div className="bannerSection">
        <div className="Banner">
          <div className="Banner-text">
            <h1>a Digital Craft Studio</h1>
            {/* <h1> Designing Digital DNa</h1> */}
          </div>
          {/* <div className="Banner-model">
          </div> */}
        </div>
        <div className="banner-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
          >
            <source src={assets.bannervideo} type="video/webm" />
            <source src={assets.bannervideo} type="video/mp4" />
            <source src={assets.bannervideo} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Banner;

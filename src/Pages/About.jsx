import React, { Fragment } from "react";
// import { assets } from "../assets/assets";
import Clients from "../Components/Clients";
import AboutScroll from "../Components/AboutScroll";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";
import { Helmet } from "react-helmet";
import Faq from "../Components/Faq";
import Videos from "../Components/Video";
import AboutHeader from "../Components/AboutHeader";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
 

  return (
    <Fragment>
      <Helmet>
        <title>About Vcraftyu</title>
        <meta name="description" content="" />
        <meta property="og:title" content="About Vcraftyu" />
      </Helmet>

      <div className="about-section">
       <AboutHeader/>
        <AboutScroll />
        <Videos />
        <Clients />
        <Faq />
      </div>
    </Fragment>
  );
};

export default About;
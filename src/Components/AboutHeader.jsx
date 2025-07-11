import React, { Fragment, useEffect, useRef } from "react";
import { assets } from "../assets/assets";

import { gsap, ScrollTrigger } from "./gsapSetup";

const AboutHeader = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(aboutRef.current, { scale: 1, y: 0, opacity: 1 });

      setTimeout(() => {
        const ab = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 10%",
            end: "bottom 0%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
            onLeaveBack: () => {
              gsap.set(aboutRef.current, { scale: 1, y: 0, opacity: 1 });
            },
            // onEnterBack: () => {
            //   gsap.set(aboutRef.current, { scale: 1, y: 0, opacity: 1 });
            // },
          },
        });

        ab.fromTo(
          aboutRef.current,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: "-10%",
            opacity: 0,
            scale: 0.6,
            ease: "none",
            immediateRender: false,
          }
        );

        ScrollTrigger.refresh();
      }, 100); // wait for ScrollToTop
    }, aboutRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div className="aboutUs-container">
      <div className="aboutUs-content" ref={aboutRef}>
        <h1 className="about-heading">About</h1>
        <p className="aboutHeading">
          <img src={assets.at} className="about-at" alt="" /><span className="highlight-text">Vcraftyu</span>, we build with precision and think like prompts <img src={assets.m} alt="" />
        </p>
        {/* <p className="aboutDescription">
          Born in <span className="highlight-text">2023</span> with nothing but
          a laptop and a dream, we’ve grown into a powerhouse of creators,
          coders, and <span className="highlight-text">caffeine-fueled</span>{" "}
          problem solvers. We're not your average{" "}
          <span className="highlight-text">dev</span> team — we build sleek
          apps, bold websites, and
          <span className="highlight-text"> smart systems</span> that actually
          work. Every pixel, every line of code is crafted with purpose (and a
          bit of madness).
          <span className="highlight-text">Vcraftyu</span> isn’t just our name —
          it’s our mindset. Let’s make something unforgettable.
        </p> */}
        <p className="aboutDescription">Fueled by caffeine, code, and a touch of generative brilliance, we turn wild ideas into digital products that move fast and scale faster.

We blend human creativity with AI-enhanced workflows — from UI to backend logic — pushing boundaries where conventional development ends. Every line of code, every interaction, every model we touch is crafted for performance and impact.

We’re not here to follow. We’re here to build what hasn’t been imagined yet.
Vcraftyu isn’t just our name — it’s the framework we live by.
</p>
      </div>
    </div>
  );
};

export default AboutHeader;

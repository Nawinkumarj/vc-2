import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "./gsapSetup";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const videocontainerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: videocontainerRef.current,
              start: "top 100%",
              end: "bottom 20%",
              scrub: 1,
              pin: true,
            },
          });
          tl.fromTo(
            videoRef.current,
            { y: 0, opacity: 0, scale: 1.3 },
            { y: 0, opacity: 1, scale: 0.9, ease: "power2.inOut", duration: 1 }
          );

          // Slide video left
          tl.to(
            videoRef.current,
            {
              xPercent: -50,
              duration: 1,
              ease: "power2.inOut",
            },
            "+=0.3"
          );

          tl.fromTo(
            textRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" },
            "<"
          );
        },

        // Mobile
        "(max-width: 767px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: videocontainerRef.current,
              start: "top 90%",
              end: "bottom 30%",
              scrub: 1,
              pin: true,
            },
          });

          tl.fromTo(
            videoRef.current,
            { opacity: 0, scale: 0.2 },
            { opacity: 1, scale: 1, ease: "power2.inOut", duration: 1.2 }
          );

          tl.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" },
            "+=0.5"
          );
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);

      return () => {
        mm.kill();
      };
    }, videocontainerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      className="video-container"
      ref={videocontainerRef}
    >
      <video
        src={assets.video}
        autoPlay
        playsInline
        loop
        muted
        ref={videoRef}
      ></video>

      <div className="text-content" ref={textRef}>
        <h1>Why You Need <span className="highlight-text">Vcraftyu</span> ?</h1>
        <div className="why-you-need">
          <p>We bring a fresh perspective.</p>
          <p>creative solutions,</p>
          <p>ech expertise</p>
        </div>
      </div>
    </div>
  );
};
export default Videos;
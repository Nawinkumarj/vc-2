import React, { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "./gsapSetup";

gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  const videocontainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = ScrollTrigger.matchMedia({
        // Desktop
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
            { y: 0, opacity: 0, scale: 0.2 },
            { y: 0, opacity: 1, scale: 1, ease: "power2.inOut", duration: 1.2 }
          );
        },
      });

      // Optional: Refresh after layout
      setTimeout(() => ScrollTrigger.refresh(), 100);

      return () => {
        mm.kill();
      };
    }, videocontainerRef);

    return () => {
      ctx.revert(); // revert animations
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  
  return (
    <div className="video-container" ref={videocontainerRef}>
      <video
        src={assets.video}
        autoPlay
        playsInline
        loop
        muted
        ref={videoRef}
        typeof="mp3"
      ></video>
      
    </div>
  );
};

export default Videos;
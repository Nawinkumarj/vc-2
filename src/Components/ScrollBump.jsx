// ScrollBump.jsx
import React, { useEffect } from "react";

const ScrollBump = ({ footerRef }) => {
  useEffect(() => {
    const bump = document.getElementById("scroll-bump");

    const handleScroll = () => {
      if (!bump || !footerRef?.current) return;

      const footerRect = footerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isVisible =
        footerRect.top < viewportHeight && footerRect.bottom > 0;

      bump.classList.toggle("visible", isVisible);
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    bump?.addEventListener("click", handleClick);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      bump?.removeEventListener("click", handleClick);
    };
  }, [footerRef]);

  return (
    <div id="scroll-bump" className="scroll-bump">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 690 60"
        preserveAspectRatio="none"
      >
        <path
          className="bulge"
          fill="#8750f7"
          d="M0,55 C107.57331,55 172.397965,0 261.914001,0 
             C351.430038,0 418.082695,55 524.041347,55 
             C630,55 -108,55 0,55 Z"
        />
      </svg>
      <p className="label">Back to top</p>
    </div>
  );
};

export default ScrollBump;
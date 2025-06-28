import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";

const Works = () => {
  const workscontainerRef = useRef(null);
  const workRefs = useRef([]);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workscontainerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      workRefs.current.forEach((ref, i) => {
        tl.fromTo(
          ref,
          { y: 150, opacity: 0, scale: 0.7 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut" },
          i * 1.2
        );
        tl.to(
          ref,
          { y: -30, duration: 0.5, ease: "power2.inOut" },
          i * 1.2 + 0.6
        );
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }, workscontainerRef); // use ref scope to target only this component

    return () => {
      ctx.revert(); 
    };
  }, []);




  return (
    <div className="ourWorks-container" ref={workscontainerRef}>
      <div className="ourWorks-heading">
        <h1>works</h1>
      </div>
      <div className="ourWorks">
        {[assets.works1, assets.works2, assets.works3, assets.works4].map((img, i) => (
          <div
            key={i}
            className="ourWorks-item"
            ref={(el) => (workRefs.current[i] = el)}
          >
            <img src={img} alt={`work-${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
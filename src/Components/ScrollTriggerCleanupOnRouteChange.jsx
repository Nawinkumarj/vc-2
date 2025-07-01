import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollTriggerCleanupOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.killAll(); 
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return null;
};

export default ScrollTriggerCleanupOnRouteChange;

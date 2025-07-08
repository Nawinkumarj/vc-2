import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

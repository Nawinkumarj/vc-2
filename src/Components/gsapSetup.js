import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Safe idle fallback
const runIdle = (cb) =>
  "requestIdleCallback" in window
    ? requestIdleCallback(cb)
    : setTimeout(cb, 200); // fallback for unsupported browsers

if (typeof window !== "undefined") {
  runIdle(() => {
    
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  });
}

export { gsap, ScrollTrigger };

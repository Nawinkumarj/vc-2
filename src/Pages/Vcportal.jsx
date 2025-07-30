import { useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { gsap, ScrollTrigger } from "../Components/gsapSetup";

const clientData = [
  {
    name: "Maxpro Consultancy",
    img: assets.works1,
    type: "Website",
    year: "2024",
  },
  {
    name: "Avinya Construction & Management",
    img: assets.works2,
    type: "Website",
    year: "2023",
  },
  {
    name: "Jonak",
    img: assets.works3,
    type: "Mobile App",
    year: "2025",
  },
  {
    name: "Instyl Hair n Bridal Studio",
    img: assets.works4,
    type: "3d Website",
    year: "2024",
  },
  {
    name: "Monakin Blockchain",
    img: assets.works6,
    type: "Web App",
    year: "2022",
  },
  {
    name: "Moneta X pay",
    img: assets.works7,
    type: "Website",
    year: "2022",
  },
  {
    name: "Infinitas",
    img: assets.works5,
    type: "ERP",
    year: "2025",
  },
  {
    name: "Moneta X Pay",
    img: assets.works8,
    type: "App",
    year: "2024"
  },
  {
    name : "AKK",
    img: assets.works9,
    type: "Portfolio",
    year: "2023",
  },
];

const Vcportal = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const scrollContainer = scrollRef.current;
      if (!container || !scrollContainer) return;

      itemRefs.current = itemRefs.current.slice(0, clientData.length);

      const runGSAP = () => {
        ScrollTrigger.matchMedia({
          "(min-width: 769px)": function () {
            const totalScrollWidth =
              scrollContainer.scrollWidth - container.offsetWidth;

            gsap.to(scrollContainer, {
              x: `-${totalScrollWidth}px`,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top 0%",
                end: "bottom 10%",
                scrub: 2,
                pin: true,
                pinSpacer: false,
                anticipatePin: 1,
                // markers: true,
              },
            });

            itemRefs.current.forEach((ref) => {
              if (!ref) return;

              gsap.fromTo(
                ref,
                { x: "0", y: 200, opacity: 0, scale: 0.9, duration: 5 },
                {
                  x: "-100%",
                  opacity: 1,
                  scale: 1,
                  scrollTrigger: {
                    trigger: ref,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: .5,
                  },
                }
              );
            });

            // Heading
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: headingRef.current,
                  start: "top 40%",
                  end: "top 30%",
                  scrub: 2,
                  pin: true,
                  anticipatePin: 1,
                  // markers:true,
                },
              })
              .fromTo(
                headingRef.current,
                { y: 0, opacity: 1 },
                { y: -300, opacity: 1, ease: "back.out(1.7)", duration: 2.5 }
              );
          },
        });

        setTimeout(() => ScrollTrigger.refresh(), 300);
      };

      const waitForImages = () => {
        const images = container.querySelectorAll("img");
        let loaded = 0;
        const total = images.length;

        if (total === 0) {
          runGSAP();
          return;
        }

        images.forEach((img) => {
          if (img.complete) {
            loaded++;
            if (loaded === total) runGSAP();
          } else {
            img.onload = img.onerror = () => {
              loaded++;
              if (loaded === total) runGSAP();
            };
          }
        });
      };

      waitForImages();
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill(true)); // ✅ Kill + cleanup immediately
      ctx.revert(); // ✅ Scoped revert
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div>
    <div className="clientPortal" ref={containerRef}>
      <img src={assets.banner} alt="" className="clientBanner" />
      <div className="client-heading" ref={headingRef}>
        <h1>Our Trustees</h1>
      </div>
      <div className="client-section">
        <div className="client-items" ref={scrollRef}>
          {clientData.map((client, index) => (
            <div
              className="client-item"
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="client-img">
                <img src={client.img} alt={client.name} />
              </div>
              <div className="client-info">
                <div className="client-info-item1">
                  <h1>{client.name}</h1>
                  <p>{client.type}</p>
                </div>
                <div className="client-info-item2">
                  <p>{client.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vcportal;

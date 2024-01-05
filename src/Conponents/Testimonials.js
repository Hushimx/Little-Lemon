import React from "react";
import "../css/specials.css";
import Review from "./reviewCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const continerRef = React.useRef(null);
  const title = React.useRef(null);
  React.useEffect(() => {
    const newTl = gsap.timeline();
    newTl.fromTo(
      title.current,
      {
        y: -200,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      }
    );
    newTl.fromTo(
      ".review",
      {
        autoAlpha: 0.0,
        y: 80,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.5,
      }
    );

    const scrollTrigger = ScrollTrigger.create({
      animation: newTl,
      trigger: continerRef.current,
      start: "top center",
      end: "center center+=100",
      toggleActions: "play none none reverse",
      scrub: 1,
    });
    return () => {
      scrollTrigger.kill();
      newTl.kill();
    };
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#577A6E" }}>
      <div className="container" ref={continerRef}>
        <div className="Specials p-5 ">
          <h2
            className="SectionTitle mb-5 text-center"
            style={{ color: "white" }}
            ref={title}
          >
            Testimonials
          </h2>
          <div className="row cards p-0 d-flex justify-content-center  justify-content-md-between ">
            <Review
              name="Ahmed"
              desc="Exquisite flavors and impeccable service. The restaurant's ambiance adds to the dining experience. A must-visit!"
              img="/images/person1.png"
            />
            <Review
              name="Ali"
              desc="An absolute culinary delight! Every dish is a masterpiece. My taste buds thank you!"
              img="/images/person3.jpg"
            />
            <Review
              name="Abdul"
              desc="
            From appetizers to desserts, each bite is a journey. The chefs here are culinary wizards. Our favorite dining spot!"
              img="/images/person2.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

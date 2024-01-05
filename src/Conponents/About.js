import React from "react";
import "../css/about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      ref.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 0.2,
        autoAlpha: 1,
        ease: "none",
      }
    );
    timeline.fromTo(
      ".aboutusCard",
      {
        autoAlpha: 0,
        x: -100,
      },
      {
        duration: 0.3,
        autoAlpha: 1,
        x: 0,
        ease: "none",
      }
    );
    ScrollTrigger.create({
      animation: timeline,
      trigger: ref.current,
      start: "top center",
      toggleActions: "play none none reverse",
    });
  }, []);

  return (
    <>
      <div
        className=" about container-fluid"
        style={{
          backgroundImage: "url(/images/aboutus.png)",
          backgroundSize: "cover",
          opacity: 0,
        }}
        ref={ref}
      >
        <div className=" container " style={{ height: "100%" }}>
          <div className="row" style={{ height: "100%" }}>
            <div className="aboutusCard col-12 col-md-4 ms-0 ms-md-5 textBox p-5 d-flex flex-column">
              <h2 className="text-center mb-2" style={{ color: "#ffe500" }}>
                About us
              </h2>
              <p
                className=" align-self-center "
                style={{
                  width: "250px",
                  color: "white",
                  wordBreak: "break-all",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. d
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

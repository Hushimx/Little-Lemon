import React from "react";
import "../css/hero.css";
import img1 from "../restauranfood 1.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Header({ Link }) {
  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".leftSide",
      {
        autoAlpha: 0,
        x: -300,
      },
      {
        duration: 0.3,
        autoAlpha: 1,
        x: "0",
        ease: "none",
      }
    );
    tl.fromTo(
      ".element1",
      {
        autoAlpha: 0,
        x: 0,
        y: -10,
      },
      {
        duration: 0.3,
        autoAlpha: 1,
        x: "0",
        y: "0",
        ease: "none",
      }
    );
  }, []);
  return (
    <>
      <div className="hero row d-flex align-items-center px-4">
        <div className="container">
          <div className="leftSide col-12 col-lg-6 offset-1">
            <div className="title">
              <h1 className="name m-0">Little Lemon</h1>
              <p style={{ marginTop: "-10px", color: "white" }}>New Yourk</p>
            </div>
            <p className="text-wrap w-50" style={{ color: "white" }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reserve">
              <button className="lemonBtn">Reserve Table</button>
            </Link>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <div className="element1 d-none d-md-flex">
              <div style={{ transform: "rotate(-31deg)" }}>
                <img src={img1}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "../css/specials.css";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Specials() {
  const title = React.useRef(null);
  const continerRef = React.useRef(null);
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
      ".card",
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
    <div className="container">
      <div className="Specials p-5 " ref={continerRef}>
        <h2 className="SectionTitle mb-3" ref={title}>
          Specials
        </h2>
        <div className="row cards p-0 d-flex justify-content-between ">
          <Card
            name="Greak Salad"
            price="12.99"
            desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            img={"/images/greek.png"}
          />
          <Card
            name="Cheese cake"
            price="5.99"
            desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
            img={"/images/Cake.png"}
          />
          <Card
            name="Turkish Salad"
            price="5.00"
            desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            img={"/images/TurkishSalad.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

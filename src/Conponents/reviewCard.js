import React from "react";
import { wrap } from "gsap";
export default function Review({ name, desc, img }) {
  return (
    <div
      className="review col-12 col-md-4 my-2 d-flex flex-column mb-5 mb-md-0"
      style={{
        width: "350px",
        height: "auto",
        backgroundColor: "#EDEFEE",
        borderRadius: "16px",
      }}
    >
      <div className="align-self-center">
        <img
          className=""
          src={img}
          style={{
            width: "114.97px",
            height: "114.97px",
            transform: "translateY(-30px)",
            borderRadius: "50%",
          }}
          alt=""
        />
      </div>
      <h2 className="text-center userName" width="100px">
        {name}
      </h2>
      <div
        className="align-self-center p-3 position-relative "
        style={{ width: "10rem" }}
      >
        <i
          class="fa-sharp fa-solid fa-quote-left position-absolute "
          style={{
            left: "-2rem",
            top: "-1rem",
            fontSize: "2rem",
            color: "black",
          }}
        ></i>
        <p
          style={{
            padding: 0,
            width: "100%",
            maxHeight: "100%",
            overflowWrap: "break-word",
            fontSize: `13px`,
          }}
        >
          {desc}
        </p>
        <i
          class="fa-sharp fa-solid fa-quote-right position-absolute"
          style={{
            right: "-2rem",
            bottom: 0,
            fontSize: "2rem",
            color: "black",
          }}
        ></i>
      </div>
    </div>
  );
}

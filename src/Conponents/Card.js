import React from "react";
export default function Card({ name, price, desc, img }) {
  return (
    <div className="col-12 col-md-4 my-2" style={{ width: "20rem" }}>
      <div
        className="card"
        style={{
          width: "100%",
          backgroundColor: "#EDEFEE",
          borderRadius: "16px",
        }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <div className="d-flex justify-content-between ">
            <h5 className="card-title">{name}</h5>
            <span className="price">${price}</span>
          </div>
          <p className="card-text">{desc}</p>
          <a href="#" className="">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

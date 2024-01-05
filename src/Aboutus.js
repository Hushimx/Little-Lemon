import React from "react";

export default function AboutPage() {
  return (
    <>
      <div
        className="container  d-flex align-items-center "
        style={{
          backgroundColor: "#4a5e57",
          height: "70vh",
          width: "40%",
          borderRadius: "20px",
          marginBottom: "13rem ",
          marginTop: "4rem ",
        }}
      >
        <div className="row w-100">
          <div className="col-12 col-md-6 d-flex align-items-center flex-column ">
            <div className="title" style={{ width: "87%" }}>
              <h1 className="name m-0">Little Lemon</h1>
              <p style={{ marginTop: "-10px", color: "white" }}>New Yourk</p>
            </div>
            <p className="ms-5 text-wrap w-100" style={{ color: "white" }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/images/Mario-adrian1.jpg"
              width={350}
              style={{ borderRadius: "20px " }}
              alt="Founder pics"
            />
          </div>
        </div>
      </div>
    </>
  );
}

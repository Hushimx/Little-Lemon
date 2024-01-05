import React from "react";
import "../css/footer.css";
function Footer() {
  return (
    <>
      <div
        className="foo tercontainer-fluid "
        style={{
          backgroundColor: "#577A6E",
          height: "auto",
          marginTop: "3rem",
          position: "relative",
        }}
      >
        <div className="container ">
          <div
            style={{
              backgroundImage: "url(/images/wave.png)",
              height: "143px",
              width: "100%",
              position: "absolute",
              top: "-7rem",
              left: "0",
            }}
          ></div>
          <div className="row h-100 ">
            <div className="col-12 col-md-4 py-5 ps-5 d-flex flex-column g-5">
              <img
                src="/images/logoWhite.png"
                className="mb-4"
                width="200px"
                alt=""
              />
              <p style={{ color: "white" }}>
                <i
                  className="fa-solid fa-location-dot me-2"
                  style={{ fontSize: "22px" }}
                ></i>
                238 Moscow StSan Francisco, CA 94112
              </p>
              <p style={{ color: "white" }}>
                <i
                  className="fa-solid fa-phone me-2"
                  style={{ fontSize: "22px" }}
                ></i>
                (+36)0364197459
              </p>
              <p style={{ color: "white" }}>
                <i
                  class="fa-solid fa-envelope me-2"
                  style={{ fontSize: "22px" }}
                ></i>
                Neebodate@gmail.com
              </p>
            </div>
            <div className="col-12 col-md-3 py-5 ps-5 d-flex flex-column g-5">
              <h2 className="header mb-4 ">Quicklinks</h2>
              <a className="">
                <p>Integration</p>
              </a>
              <a className="">
                <p>Pricing</p>
              </a>
              <a className="">
                <p>Blog</p>
              </a>
            </div>
            <div className="col-12 col-md-3 py-5 ps-5 d-flex flex-column g-5">
              <h2 className="header mb-4">Support</h2>
              <a className="">
                <p>Data Form</p>
              </a>
              <a className="">
                <p>Job</p>
              </a>
              <a className="">
                <p>Contact</p>
              </a>
              <a className="">
                <p>Terms of Use</p>
              </a>
            </div>
            <div className="col-12 col-md-2 py-5 ps-5 d-flex flex-column g-5">
              <h2 className="header mb-4">Social</h2>
              <div className="d-flex justify-content-start ps-1">
                <a href="">
                  <i className="brands fa-brands fa-x-twitter"></i>
                </a>
                <a href="">
                  <i className="brands fa-brands fa-facebook"></i>
                </a>
                <a href="">
                  <i className="brands fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

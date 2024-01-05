import React from "react";
import "../css/header.css";
import exampleImage from "../logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header({ Link }) {
  return (
    // <div className="holder container-fluid">
    //   <nav className="row justify-content-between align-items-center">
    //     <div className="col-3">
    //       <img src={exampleImage} width="158px" height={"43px"} alt="logo" />
    //     </div>
    //     <div className="col-3 d-flex justify-content-center">
    //       <ul className="navItmes m-0 d-none d-md-flex">
    //         <li className="mx-2">Home</li>
    //         <li className="mx-2">About</li>
    //         <li className="mx-2">MENU</li>
    //         <li className="mx-2">Reserve</li>
    //       </ul>
    //     </div>
    //     <div className="col-3 d-flex justify-content-end">
    //       <a>LOGIN</a>
    //     </div>
    //   </nav>
    // </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div
          className="row w-100 justify-content-between 
        "
        >
          <div className="col-3 me-3 order-1">
            <Link to="/" className="navbar-brand" href="#">
              <img
                src={exampleImage}
                width="158px"
                height={"43px"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-end order-2 order-md-3 align-items-center ">
            <button
              class="navbar-toggler d-block d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a className="d-none d-md-block">LOGIN</a>
          </div>
          <div className="col-12 col-md-3 order-3 order-md-2 d-flex">
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav justify-content-evenly w-75">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link class="nav-link" to="/about">
                  About us
                </Link>
                <a class="nav-link" href="#">
                  Pricing
                </a>
                <Link class="nav-link " to="/reserve">
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

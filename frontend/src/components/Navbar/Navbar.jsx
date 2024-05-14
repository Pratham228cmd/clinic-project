import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
              <a class="nav-link" href="/lab">
                Lab
              </a>
              <a class="nav-link" href="/Appointment">
                Appointment
              </a>
              <a class="nav-link" href="/Contact">
                Contact Us
              </a>
              <a class="nav-link" href="/About">
                About Us
              </a>
			  {/* <a class="nav-link" href="/signin">
                About Us
				sign in
              </a> */}
              <button type="button" className="btn btn-primary" onClick={()=>navigate("/Signin")}>sign in</button>
              {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

import React from "react";

import "./navbarstyles.css";


import { HashRouter as Router, Link } from "react-router-dom";
import "./navbarstyles.css";
import logo from "./Logo/logo.png";
import close from "./Logo/close.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ width: '150px', height: '100px', left: '50%', position: 'relative', top: '10px' }}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Global Tekstil
              </h5>
              <button
                type="button"
                class="btn-close btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              > <img src={close} alt="" /> </button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                  AnaSayfa
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../../pages/home/index.jsx">
                  Hizmetlerimiz
                  </a>
                </li>
                <li class="nav-item">
                  <a
                  
                    href="../../pages/home/hakkimizda.jsx"
                    
                  >
                    Hakkımızda
                  </a>
                  
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link "
                    href="../../pages/home/iletişim.jsx"
                    
                  >
                    İletişim
                  </a>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} alt="Logo" style={{ width: '200px', height: '150px', left: '50%', position: 'relative', top: '10px' }} />
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a  to="/home"  className="navbar-brand">AnaSayfa</a>
        <a href="/my-app/src/pages/home/index.jsx/Carusel" className="navbar-brand">Hizmetlerimiz</a>
        <a   to="/home" className="navbar-brand">Hakkımızda</a>
        <a  to="/home" className="navbar-brand">İletişim</a>
      </nav> */}
    </div>
  );
};

export default Navbar;

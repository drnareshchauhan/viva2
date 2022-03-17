import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              vivaPsm
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setHide(!hide)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${hide ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/vivaone">
                    VivaOne
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/vivatwo">
                    VivaTwo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/aboutus">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;

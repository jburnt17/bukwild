import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LayoutUI.css";

function LayoutUI({ active }) {
  const navigate = useNavigate();
  return (
    <nav className="nav__body">
      <section className="nav__con">
        <img
          src="logo.svg"
          className="nav__logo"
          onClick={() => navigate("/industries")}
        />
        <ul className="nav__menu">
          <li
            onClick={() => navigate("/industries")}
            className={active === 0 ? "nav__menu__active" : null}
          >
            Industries
          </li>
          <li
            onClick={() => navigate("/services")}
            className={active === 1 ? "nav__menu__active" : null}
          >
            Services
          </li>
          <li
            onClick={() => navigate("/about-us")}
            className={active === 2 ? "nav__menu__active" : null}
          >
            About Us
          </li>
        </ul>
      </section>
      <section className="nav__con">
        <button
          className="nav__contact"
          onClick={() =>
            (window.location =
              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jburnt17@gmail.com")
          }
        >
          Contact Us
        </button>
      </section>
    </nav>
  );
}

export default LayoutUI;

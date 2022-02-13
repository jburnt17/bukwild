import React from "react";
import { useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import "./LayoutUI.css";

function LayoutUI({ active, pages }) {
  const navigate = useNavigate();

  const transitionRight = useTransition(null, {
    from: { x: -1000, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  const transitionLeft = useTransition(null, {
    from: { x: 1000, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });

  return (
    <nav className="nav__body">
      {transitionRight((style) => (
        <animated.section className="nav__con" style={style}>
          <img
            src="logo.svg"
            className="nav__logo"
            onClick={() => navigate("/industries")}
          />
          <ul className="nav__menu">
            {/* <li
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
          </li> */}

            {/* Had idea to just drill pages down to LayoutUI and map to make each nav link (saved all code above) */}
            {pages.map((page, i) => (
              <li
                className={active === i ? "nav__menu__active" : null}
                onClick={() => navigate(`/${page.slug}`)}
              >
                {page.title}
              </li>
            ))}
          </ul>
        </animated.section>
      ))}
      {transitionLeft((style) => (
        <animated.section className="nav__con" style={style}>
          <button
            className="nav__contact"
            onClick={() =>
              (window.location =
                "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jburnt17@gmail.com")
            }
          >
            Contact Us
          </button>
        </animated.section>
      ))}
    </nav>
  );
}

export default LayoutUI;

import React from "react";
import LayoutUI from "../LayoutUI/LayoutUI.js";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import "./PageUI.css";
import { useNavigate } from "react-router-dom";

function PageUI({ page, active }) {
  const { blocks } = page;
  const navigate = useNavigate();

  return (
    <div className={`body__${page.slug}`}>
      <LayoutUI active={active} />
      <main className="main__section">
        <h1 className="main__headline">{blocks[0].headline}</h1>
        <sub className="main__subhead">{blocks[0].subhead}</sub>
      </main>
      <footer className="footer__section">
        <h2 className="footer__headline">{blocks[0].cta}</h2>
        <div
          className="footer__cta"
          onClick={() =>
            (window.location =
              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jburnt17@gmail.com")
          }
        >
          <p className="footer__subhead">LET'S TALK</p>
          <ArrowNarrowRightIcon width={18} className="footer__icon" />
        </div>
      </footer>
    </div>
  );
}

export default PageUI;

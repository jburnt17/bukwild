import React from "react";
import LayoutUI from "../LayoutUI/LayoutUI.js";
import { useTransition, animated, config } from "react-spring";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import "./PageUI.css";

function PageUI({ page, active, pages }) {
  const { blocks } = page;
  const transitionUp = useTransition(null, {
    from: { y: 1000, opacity: 0 },
    enter: { y: 0, opacity: 1, delay: 250 },
    config: config.slow
  });

  return (
    <div className={`body body__${page.slug}`}>
      <LayoutUI active={active} pages={pages} />
      {transitionUp((style) => (
        <animated.main className="main__section" style={style}>
          <h1 className="main__headline">{blocks[0].headline}</h1>
          <sub className="main__subhead">{blocks[0].subhead}</sub>
        </animated.main>
      ))}
      {transitionUp((style) => (
        <animated.footer className="footer__section" style={style}>
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
        </animated.footer>
      ))}
    </div>
  );
}

export default PageUI;

import React from "react";
import KFC from '../Doc/Product/Kfc.png'
import plu from '../Doc/Product/plu.png'
import "./Portfolio.css";
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3,SiJavascript,SiPostman,SiGithub,SiHeroku} from 'react-icons/si'
import {TbLivePhoto} from 'react-icons/tb'
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {/* First Project */}
        <article className="portfolio__item">
          <h3>KFC Clone</h3>
          <div className="portfoli__item-image">
            <img src={KFC}></img>
          </div>

          <h5>
            KFC is the marketing industry's leading provider of content calendar, content optimization, and Food Delivery. This was a collaborative project buit by team of 5 members in 5 days.
          </h5>

          <div className="portfolio__item-stack">
            <a className="btn2"> <ImHtmlFive/> </a>
            <a className="btn2"> <SiCss3/> </a>
            <a className="btn2"> <SiJavascript/> </a>
            <a className="btn2"> <SiPostman/> </a>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hemant097/KFC-clone.git"
              target="_blank"
              className="btn"
            >
              Github <SiGithub/>
            </a>
            <a
              href="https://venerable-sprite-c3ed8d.netlify.app/homepage"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo <TbLivePhoto/>
            </a>
          </div>
        </article>
        {/* Second Project */}

        <article className="portfolio__item">
          <h3>Pluralsight</h3>
          <div className="portfoli__item-image">
            <img src={plu}></img>

          </div>

          <h5>
            Pluralsight is India's largest online higher education company
            providing programs in Data Science, Technology, Management and coding. This was a collaborative project buit by team of 5 members in 5 days.
          </h5>

          <div className="portfolio__item-stack">
            <a className="btn2"><ImHtmlFive/> </a>
            <a className="btn2"><SiCss3/></a>
            <a className="btn2"><SiJavascript/></a>
            <a className="btn2"><SiPostman/></a>
            <a className="btn2"><SiHeroku/> </a>
          </div>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hariohmtripathi/Pluralsight.git"
              target="_blank"
              className="btn"
            >
              Github <SiGithub/>
            </a>
            <a
              href="https://classy-semolina-ace696.netlify.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo <TbLivePhoto/>
            </a>
          </div>
        </article>

        {/* Third Project */}
        
      </div>
    </section>
  );
};

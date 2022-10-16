import React from "react";
import "./about.css";

import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
           
            <img src="https://media.giphy.com/media/kl81GtX2bdVvw3ezYz/giphy.gif" alt="about"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1000+ hrs Coding </small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Clients </h5>
              <small>0 Clients</small>
            </article>
          </div>
          <p>
            Hi, I'm Mohammad Osama and my Pursing B.tech computer scince From
            SVN College and currently, I'm an Aspiring Full Stack Web Developer
            at Masai School
          </p>
          <a href="#contact" className=" btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

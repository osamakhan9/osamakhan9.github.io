import React from "react";
import "./Footer.css";
import { GrTwitter } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Osama khan
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/osama-khan-23944018b/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/osamakhan9" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.hackerrank.com/okosama06" target="_blank">
          <SiHackerrank />
        </a>
        <a href="https://twitter.com/okhan4642" target="_blank">
          <GrTwitter />
        </a>
      </div>
      <div className="footer__copyrihght">
        <small>&copy; Osama Khan . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

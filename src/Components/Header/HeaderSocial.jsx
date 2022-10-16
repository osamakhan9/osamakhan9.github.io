import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
    </div>
  );
};

export default HeaderSocial;

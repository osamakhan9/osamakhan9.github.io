import "./Header.css";
import { CTA } from "./CTA";
// import Me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
// import TypeAnimation from './TypeAnimation'
// import TypeAnimation from "react-type-animation";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Osama Khan</h1>
        <h5 className="text-light">Full-Stack Web Developer</h5>
        {/* <TypeAnimation
          className="text-light"
          cursor={true}
          sequence={["Full-Stack Web Developer", 2000, "Good Listener", 2000]}
          wrapper="h5"
          repeat={Infinity}
        /> */}
        <CTA />
        <HeaderSocial />
        <div className="me">
          {/* <img src={Me} alt="Krishan Kumar Safi"></img> */}
          <img
            src="https://avatars.githubusercontent.com/u/101393695?v=4"
            alt="osama"
          ></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

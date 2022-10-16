// import "./App.css";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
// import Services from "./Components/Services/Services"
import { Portfolio } from "./Components/Portfolio/Portfolio";
// import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        {/* <Services/> */}
        {/* <Testimonials/> */}
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;

// import "./App.css";
import Header from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
// import Services from "./Components/Services/Services"
import { Portfolio } from "./Components/Portfolio/Portfolio";
import Calendar from './Components/Calendar/Calendar'
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Statistics from './Components/My Statistics/Statistics'
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Portfolio />
        <Statistics/>
       <Calendar/>
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;

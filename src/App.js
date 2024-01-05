import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//pages
import Reserve from "./Reserve";
import AboutPage from "./Aboutus";

//landing page components
import Header from "./Conponents/Header";
import Hero from "./Conponents/Hero";
import Specials from "./Conponents/Specials";
import Testimonials from "./Conponents/Testimonials";
import About from "./Conponents/About";
import Footer from "./Conponents/Footer";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function LandingPage() {
  return (
    <div className="main overflow-hidden mx-md-auto">
      <Hero Link={Link} />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}
function App() {
  return (
    <>
      <Router>
        <Header Link={Link} />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesComponent;

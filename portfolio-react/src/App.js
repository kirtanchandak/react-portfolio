import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

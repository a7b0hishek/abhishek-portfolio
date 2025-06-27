

import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Abhishek</h1>
      <div className="space-x-4">
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">About</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded cursor-pointer text-white"
        >
          Contact Me 📩
        </ScrollLink>
      </div>
    </nav>
  );
}

export default Navbar;

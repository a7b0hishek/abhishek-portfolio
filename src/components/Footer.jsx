import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 flex flex-col items-center">
      {/* Name */}
      <motion.h3
        className="text-2xl font-semibold mb-2 text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Abhishek Sharma 🚀
      </motion.h3>

      {/* Links */}
      <motion.div
        className="flex space-x-6 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </motion.div>

      {/* Copyright */}
      <motion.p
        className="text-sm mt-4 text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        © 2025 Abhishek Sharma. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default Footer;

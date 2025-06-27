import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondary text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold mb-10 text-accent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me 👨‍💻
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">

        {/* Description */}
        <motion.p
          className="text-base text-gray-300 leading-relaxed text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey there! I'm <span className="text-accent font-semibold">Abhishek</span> — a passionate
          frontend developer who loves creating animated, modern, and responsive websites.
          🚀 I work mostly with <b>React</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>.  
          I enjoy exploring new tools and trends to stay updated in the frontend world.
        </motion.p>
      </div>
    </section>
  );
}

export default About;

import { motion } from "framer-motion";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "Movie App 🎥",
      desc: "A React app to browse and search movies with a clean UI.",
      link: "#",
    },
    {
      title: "Portfolio Website 💻",
      desc: "My personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      link: "#",
    },
    {
      title: "Weather App 🌦️",
      desc: "Simple weather app with live API and dynamic background.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-30 px-9 flex flex-col items-center"
    >
      <motion.h2
        className="text-5xl font-bold mb-10 text-accent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects 🚀
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">{proj.title}</h3>
            <p className="text-gray-300 mb-6">{proj.desc}</p>
            <a
              href={proj.link}
              className="inline-block px-4 py-2 bg-accent text-black rounded hover:bg-blue-600 transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

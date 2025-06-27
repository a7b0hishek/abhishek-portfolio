import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "React ⚛️",
    "Tailwind CSS 💙",
    "JavaScript 🟨",
    "Framer Motion ✨",
    "HTML5 🔶",
    "CSS3 🔷",
    "Git & GitHub 🐙",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold mb-12 text-accent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills 💪
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center text-xl font-semibold border border-gray-700 cursor-pointer hover:bg-blue-500 hover:text-white transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

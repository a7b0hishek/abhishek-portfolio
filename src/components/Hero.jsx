import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-primary bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
    >
      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* DP Glow */}
        <motion.div
          style={{ width: "120px", height: "120px" }}
          className="rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_20px_#3b82f6]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img
            src="/src/assets/hero-dp1.jpg"
            alt="Abhishek"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl font-bold mt-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Abhishek 🚀
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          A Frontend Developer & React Enthusiast
        </motion.p>

        {/* Typing Text */}
        <motion.div
          className="text-2xl text-blue-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Typewriter
            words={['React Developer ⚛️', 'Tailwind Lover 💙', 'Animation Freak ✨']}
            loop
            cursor
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.div>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          className="mt-8 px-6 py-3 rounded-full bg-blue-500 text-black font-semibold shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1, backgroundColor: "#2563eb", color: "#fff" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Hire Me 🚀
        </motion.a>

        {/* Down Arrow Icon */}
        <motion.div
          className="mt-10 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <a href="#about">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;

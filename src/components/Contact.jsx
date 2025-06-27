import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-primary text-white flex flex-col items-center justify-center py-16 px-6"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-accent mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me 📩
      </motion.h2>

      {/* Form */}
      <motion.form
        className="w-full max-w-md flex flex-col space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        ></textarea>

        <motion.button
          type="submit"
          className="bg-accent text-black font-semibold py-3 rounded hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;

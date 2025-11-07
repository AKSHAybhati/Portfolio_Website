// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3"
        >
          <span className="text-gray-400 font-mono text-xl">01.</span>
          <span className="text-gray-900 dark:text-white">About Me</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-800 ml-4"></div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-6"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold">Akshay</span>, a passionate full-stack developer specializing in the{" "}
            <span className="">MERN stack</span>. I enjoy crafting fast, responsive, and intelligent interfaces that
            blend clean design with strong backend logic.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Currently a <span className="font-semibold">7th-semester CS student</span>, I focus on building{" "}
            <span className="">AI-powered and scalable applications</span>. I'm always eager to learn new technologies
            and tackle challenging problems.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
            {["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Next.js", "Tailwind CSS", "Python"].map(
              (tech, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="text-gray-500 dark:text-gray-400 font-mono text-sm flex items-center before:content-['▹'] before:text-gray-500 before:mr-2 before:text-lg"
                >
                  {tech}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

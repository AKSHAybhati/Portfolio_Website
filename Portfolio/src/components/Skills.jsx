// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiJavascript } from "react-icons/si";

const Skills = () => {
  const tech = [
    { icon: <FaReact size={32} />, name: "React", color: "text-blue-400" },
    { icon: <SiNextdotjs size={32} />, name: "Next.js", color: "text-white" },
    { icon: <SiTypescript size={32} />, name: "TypeScript", color: "text-blue-500" },
    { icon: <SiJavascript size={32} />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaNodeJs size={32} />, name: "Node.js", color: "text-green-500" },
    { icon: <SiExpress size={32} />, name: "Express", color: "text-gray-400" },
    { icon: <SiMongodb size={32} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiPostgresql size={32} />, name: "PostgreSQL", color: "text-blue-600" },
    { icon: <SiTailwindcss size={32} />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <FaPython size={32} />, name: "Python", color: "text-yellow-500" },
    { icon: <FaGitAlt size={32} />, name: "Git", color: "text-orange-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="text-gray-400 font-mono text-xl">02.</span>
          <span className="text-gray-900 dark:text-white">Skills & Technologies</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-800 ml-4"></div>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
        >
          {tech.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="flex flex-col items-center p-6 rounded-xl bg-gray-100 border border-gray-200 hover:border-gray-400 transition-all cursor-pointer dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-600">
                <div className={`${t.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {t.icon}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {t.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

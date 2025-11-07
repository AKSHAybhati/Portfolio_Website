// src/components/Projects.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder",
      desc: "Dynamic resume generator with AI enhancement and PDF export. Built with React and integrated with AI APIs for intelligent resume optimization.",
      live: "https://resume-builder-ai30.vercel.app",
      github: "https://github.com/AKSHAybhati/Ai_ResumeBuilder",
      tech: ["React", "Node.js", "AI Integration", "PDF Generation"],
    },
    {
      title: "StudySync Notes App",
      desc: "Collaborative notes app with likes, comments, and JWT authentication. Features real-time updates and seamless user experience.",
      live: "https://studysync-ten-gilt.vercel.app/",
      github: "https://github.com/AKSHAybhati/StudySync",
      tech: ["React", "MongoDB", "Express", "JWT Auth"],
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="text-gray-400 font-mono text-xl">03.</span>
          <span className="text-gray-900 dark:text-white">Featured Projects</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-800 ml-4"></div>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-100 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-all dark:bg-gray-900/50 dark:border-gray-800 dark:hover:border-gray-600"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
              <ul className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

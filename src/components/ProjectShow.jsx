import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "A fully responsive Spotify clone with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/spotify.jpg",
    liveLink: "https://your-spotify-clone.com",
    githubLink: "https://github.com/yourgithub/spotify-clone",
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek and modern portfolio built with React and TailwindCSS.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: "/images/portfolio.jpg",
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourgithub/portfolio",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-fledged e-commerce site with cart and payment gateway.",
    tech: ["React", "Redux Toolkit", "Firebase"],
    image: "/images/ecommerce.jpg",
    liveLink: "https://your-ecommerce.com",
    githubLink: "https://github.com/yourgithub/ecommerce",
  },
];

const ProjectShow = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Latest Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 p-6 rounded-2xl shadow-lg group hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-400 px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShow;

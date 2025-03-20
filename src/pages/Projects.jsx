import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ParticlesBg from "../components/ParticlesBg";
import NeonCursor from "../components/NeonCursor";

const projects = [
  {
    title: "Spotify Clone",
    description: "A fully responsive music streaming app with modern UI.",
    github: "#",
    live: "#",
    image: "/images/spotify.jpg",
  },
  {
    title: "E-Commerce Website",
    description: "A futuristic online shopping experience using React.",
    github: "#",
    live: "#",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Portfolio Website",
    description: "My personal futuristic portfolio with animations.",
    github: "#",
    live: "#",
    image: "/images/portfolio.jpg",
  },
  {
    title: "Task Manager App",
    description: "A modern and sleek task manager using React & Redux.",
    github: "#",
    live: "#",
    image: "/images/taskmanager.jpg",
  },
  {
    title: "Weather App",
    description: "A real-time weather tracking app with futuristic UI.",
    github: "#",
    live: "#",
    image: "/images/weather.jpg",
  },
  {
    title: "Crypto Dashboard",
    description: "A next-gen dashboard for tracking cryptocurrency trends.",
    github: "#",
    live: "#",
    image: "/images/crypto.png",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with dark futuristic UI.",
    github: "#",
    live: "#",
    image: "/images/chat.png",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white min-h-screen py-30 px-6">
      <ParticlesBg />
      <NeonCursor />
      <motion.h1
        className="text-5xl font-bold text-center  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <div className="flex items-center justify-center py-7 ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-9/12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl shadow-lg p-5 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-blue-400">
                {project.title}
              </h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-500 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-blue-500 transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

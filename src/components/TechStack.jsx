import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiFirebase,
} from "react-icons/si";
import ParticlesBg from "./ParticlesBg";

const technologies = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-black/90 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center space-y-4"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="text-lg font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

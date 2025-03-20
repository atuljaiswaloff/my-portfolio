import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "../components/ParticlesBg";
import NeonCursor from "../components/NeonCursor";

const About = () => {
  return (
    <section className=" bg-black text-white flex flex-col items-center justify-center pb-18 pt-40 px-6 md:px-20">
      <ParticlesBg />
      <NeonCursor />
      {/* Profile Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/profilepic.webp"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg mx-auto"
        />
        <h1 className="text-4xl font-bold mt-4 text-cyan-400">Atul Jaiswal</h1>
        <p className="text-lg text-gray-300 mt-2">
          Frontend Developer | React Developer | UI/UX Enthusiast
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        className="text-center max-w-2xl mt-6 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I am a passionate frontend developer specializing in building sleek and
        futuristic user interfaces. With a strong foundation in JavaScript,
        React, and modern design principles, I create immersive web experiences
        that blend aesthetics with functionality.
      </motion.p>

      {/* Skills */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-cyan-300">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Git",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 text-cyan-200 px-4 py-2 rounded-lg shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Experience & Education */}
      <motion.div
        className="mt-12 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-cyan-300 text-center">
          Experience & Education
        </h2>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-200">
              Frontend Developer
            </h3>
            <p className="text-gray-400">Freelance | 2023 - Present</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-cyan-200">
              Bachelor Degree
            </h3>
            <p className="text-gray-400">University of Delhi | 2019 - 2022</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

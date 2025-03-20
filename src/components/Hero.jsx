import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative  flex flex-col items-center justify-center text-center text-white px-6 pb-18 pt-40 rounded-lg shadow-xl">
      {/* Profile Image */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-6xl p-4 font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Innovating Interfaces, Elevating Experiences
      </motion.h1>
      <div className="border border-gray-700 rounded-lg p-5 bg-white/5 mt-6">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Atul Jaiswal
        </motion.h1>
        <motion.div className="text-2xl text-gray-300 mt-2">
          <Typewriter
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            options={{
              strings: [
                "Frontend Developer",
                "Futuristic UI Designer",
                "React Developer",
                "UX/UI Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </div>

      {/* Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore a next-generation web experience with a futuristic design.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer transition-all rounded-lg shadow-lg hover:shadow-sky-400/50">
          Get Started
        </button>
        <button className="px-6 py-3 text-lg cursor-pointer font-semibold border border-white hover:bg-white hover:text-black  transition-all rounded-lg">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;

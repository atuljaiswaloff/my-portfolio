import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
const [particles, setParticles] = useState([]);

useEffect(() => {
const totalParticles = 75; // ✅ Zyada particles add kiye
const newParticles = Array.from({ length: totalParticles }, () => ({
x: Math.random() _ window.innerWidth,
y: Math.random() _ window.innerHeight,
size: Math.random() _ 6 + 4, // ✅ Bigger particles (4px - 10px)
duration: Math.random() _ 5 + 4, // ✅ Slow & Smooth animation
}));
setParticles(newParticles);
}, []);

return (
<section className="relative h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
{/_ 🔥 Enhanced Particles with More Visibility _/}
<div className="absolute inset-0 pointer-events-none">
{particles.map((particle, i) => (
<motion.div
key={i}
className="absolute bg-blue-400 rounded-full opacity-80"
style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: "blur(6px)", // ✅ Stronger blur effect
            }}
initial={{
              x: particle.x,
              y: particle.y,
            }}
animate={{
              y: [particle.y, particle.y + 120, particle.y], // ✅ Bigger up-down movement
              x: [particle.x, particle.x + 70, particle.x - 30], // ✅ Side movement enhanced
              opacity: [0.5, 1, 0.5], // ✅ Brighter glow
            }}
transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
/>
))}
</div>
{/_ ✅ Profile Image with Neon Border _/}
<motion.div
className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0px_0px_20px_5px_rgba(0,102,255,0.7)]"
whileHover={{ scale: 1.1, rotate: 5 }} >
<img
          src="src/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
</motion.div>

      {/* ✅ Text Animations */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Atul Jaiswal
      </motion.h1>

      <motion.p
        className="text-gray-300 mt-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Frontend Developer | React Enthusiast
      </motion.p>

      {/* ✅ Button with Cyberpunk Glow Effect */}
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold relative overflow-hidden shadow-[0px_0px_15px_2px_rgba(0,102,255,0.8)]"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 25px rgba(0, 102, 255, 1)",
        }}
        transition={{ duration: 0.3 }}
      >
        View My Work
      </motion.a>
    </section>

);
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
return (
<section className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6">
{/_ ✅ Animated Background Effect _/}
<motion.div
className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-900 opacity-30"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
/>

      {/* ✅ Main Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Future
      </motion.h1>

      {/* ✅ Subheading */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore a next-generation web experience with a futuristic design.
      </motion.p>

      {/* ✅ Buttons */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-all rounded-lg shadow-lg">
          Get Started
        </button>
        <button className="px-6 py-3 text-lg font-semibold border border-white hover:bg-white hover:text-black transition-all rounded-lg">
          Learn More
        </button>
      </motion.div>
    </section>

);
};

export default Hero;

import { useState } from "react";
import ParticleBg from "../components/ParticlesBg";
import NeonCursor from "../components/NeonCursor";
import {
  db,
  collection,
  addDoc,
  serverTimestamp,
} from "../utils/firebaseConfig";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target; // 👈 Extract name & value properly
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // 👈 Update dynamically
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(), // Firebase timestamp
      });

      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      setSuccessMessage("Something went wrong! Please try again.");
    }

    setIsSubmitting(false);
  };
  return (
    <motion.div
      className="min-h-screen bg-black py-30 text-white flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBg />
      <NeonCursor />
      {/* Particle Background (if you have one, import and use it here) */}
      <h1 className="text-4xl font-bold text-center neon-text mb-6">
        Contact Me
      </h1>
      <p className="text-gray-400 text-lg mb-8 text-center">
        Let's create something amazing together! Reach out to me.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-cyan-500"
      >
        <div className="mb-4">
          <label className="block text-cyan-400 text-sm mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-cyan-400 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-cyan-400 text-sm mb-2">Message</label>
          <textarea
            className="w-full p-3 bg-transparent border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows="4"
            name="message"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 rounded-lg text-black font-bold text-lg shadow-lg"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-8">
        <a href="#" className="text-cyan-400 text-3xl hover:text-cyan-300">
          <FaGithub />
        </a>
        <a href="#" className="text-cyan-400 text-3xl hover:text-cyan-300">
          <FaLinkedin />
        </a>
        <a href="#" className="text-cyan-400 text-3xl hover:text-cyan-300">
          <FaTwitter />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;

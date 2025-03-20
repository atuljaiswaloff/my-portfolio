import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 w-full z-50">
      <div className="w-11/12 mx-auto max-w-6xl flex justify-between items-center px-6 py-4 bg-white/8 backdrop-blur-sm border-b border-gray-700 rounded-2xl">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-white tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Atul.dev</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative neon-text text-white text-lg font-medium px-3 py-2 transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/80 p-6 absolute top-16 left-1/2 transform -translate-x-1/2 w-10/12 flex flex-col space-y-4 items-center rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

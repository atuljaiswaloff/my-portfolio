import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "../utils/firebaseConfig"; // Firebase config import
import { collection, getDocs } from "firebase/firestore";

const testimonialss = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    feedback:
      "Amazing portfolio! The futuristic design and smooth animations are outstanding. Loved it!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Product Designer",
    feedback:
      "A highly creative and unique portfolio. The UI/UX is seamless, and transitions are super smooth!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Web Developer",
    feedback:
      "The interactive elements and futuristic touch make this portfolio stand out from the rest!",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(testimonialsData); // Firebase se fetched data ko state me set karna
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-10 ">
        Testimonials
      </h2>

      <motion.div
        className="flex space-x-8 overflow-x-auto scrollbar-hide px-4 py-4"
        whileTap={{ cursor: "grabbing" }}
      >
        {testimonialss.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg min-w-[320px] hover:scale-105 transition-all border border-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={
                "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-400"
            />
            <p className="text-white text-lg text-center italic">
              "{review.feedback}"
            </p>
            <h3 className="text-xl font-semibold text-center text-blue-400 mt-4">
              {review.name}
            </h3>
            <p className="text-gray-400 text-center">{review.role}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex space-x-8 overflow-x-auto scrollbar-hide px-4 py-4"
        whileTap={{ cursor: "grabbing" }}
      >
        {testimonials.map((review, index) => (
          <motion.div
            key={review.id} // Unique Firebase ID
            className="bg-white/10 p-6 rounded-2xl shadow-lg min-w-[420px] hover:scale-105 transition-all border border-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={
                "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
              alt={review.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-400"
            />
            <h3 className="text-xl font-semibold text-center text-blue-400 mt-4">
              {review.name}
            </h3>
            <p className="text-gray-400 text-center">{review.role}</p>
            <p className="text-white w-100 text-lg text-center italic mt-4">
              "{review.message}"
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;

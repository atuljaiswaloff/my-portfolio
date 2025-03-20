import React, { useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const TestimonialForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "testimonials"), {
        name,
        role,
        message,
        createdAt: serverTimestamp(),
      });
      alert("Testimonial submitted successfully!");
      setName("");
      setRole("");
      setMessage("");
    } catch (error) {
      console.error("Error adding testimonial: ", error);
      alert("Failed to submit testimonial");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-18 bg-white/10  p-8 rounded-2xl shadow-xl border border-white/20 max-w-lg mx-auto"
    >
      <h2 className="text-white text-2xl font-bold text-center mb-6">
        💬 Submit Your Testimonial
      </h2>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/30 focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
          required
        />
        <input
          type="text"
          placeholder="Your Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/30 focus:ring-2 focus:ring-cyan-400 outline-none transition-all"
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded-lg bg-black/20 text-white border border-white/30 focus:ring-2 focus:ring-cyan-400 outline-none transition-all h-28 resize-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg mt-6 transition-all shadow-lg hover:shadow-cyan-500/50 text-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default TestimonialForm;

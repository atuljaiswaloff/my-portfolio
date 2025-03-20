import React, { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "testimonials"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTestimonials(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold text-white">Testimonials</h2>
      <div className="space-y-3 mt-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-700 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-white font-semibold">{testimonial.name}</h3>
            <p className="text-gray-300">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;

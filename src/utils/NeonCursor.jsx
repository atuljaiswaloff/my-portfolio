import React, { useState, useEffect } from "react";

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-20 h-20 border-2 border-blue-500 rounded-full pointer-events-none transition-transform duration-100 ease-out blur-sm"
      style={{
        left: position.x - 40,
        top: position.y - 40,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default NeonCursor;

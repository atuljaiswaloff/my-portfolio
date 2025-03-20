import React, { useEffect, useState } from "react";

const NeonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0, 255, 255, 0.2), transparent 50%)`,
        transition: "0.1s",
      }}
    />
  );
};

export default NeonCursor;

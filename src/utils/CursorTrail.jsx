import React, { useEffect, useState } from "react";

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Math.random(),
      };

      setTrails((prev) => [...prev, newTrail]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
      }, 500); // ✅ 500ms me fade out hoga
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute w-4 h-4 rounded-full bg-blue-500 opacity-50 blur-md"
          style={{
            left: trail.x,
            top: trail.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;

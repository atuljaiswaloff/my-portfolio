import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 100 },
          color: { value: "#0ff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
          },
        },
      }}
    />
  );
};

export default ParticlesBg;

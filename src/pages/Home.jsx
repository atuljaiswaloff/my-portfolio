import React from "react";

import Hero from "../components/Hero";

import NeonCursor from "../components/NeonCursor";
import TechStack from "../components/TechStack";
import ParticlesBg from "../components/ParticlesBg";
import ProjectShow from "../components/ProjectShow";
import Testimonials from "../components/Testimonials";
import TestimonialForm from "../components/TestimonialForm";

const Home = () => {
  return (
    <div className="relative bg-black text-white">
      <ParticlesBg />
      <NeonCursor />
      <Hero />
      <TechStack />
      <ProjectShow />
      <Testimonials />

      <div className="p-5">
        <TestimonialForm />
        {/* <TestimonialList /> */}
      </div>
    </div>
  );
};

export default Home;

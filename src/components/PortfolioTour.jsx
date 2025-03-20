import React, { useState } from "react";
import Joyride from "react-joyride";

const PortfolioTour = () => {
  const [run, setRun] = useState(false);

  const steps = [
    { target: ".hero-section", content: "Welcome to my futuristic portfolio!" },
    { target: ".projects-section", content: "Check out my awesome projects!" },
    { target: ".contact-section", content: "Let's get in touch!" },
  ];

  return (
    <div>
      <button
        onClick={() => setRun(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Get Started
      </button>
      <Joyride steps={steps} run={run} continuous showProgress showSkipButton />
    </div>
  );
};

export default PortfolioTour;

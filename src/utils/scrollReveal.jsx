export const revealOnScroll = () => {
  const sections = document.querySelectorAll(".hidden-section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.85) {
      section.classList.add("show-section");
      section.classList.remove("hidden-section"); // ✅ Pehle se existing animations rahenge
    }
  });
};

export const initScrollReveal = () => {
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
};

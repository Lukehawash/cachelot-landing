document.addEventListener("DOMContentLoaded", () => {
  // Fade in the page wrapper
  const wrapper = document.querySelector(".page-wrapper");
  wrapper.classList.add("loaded");

  // Use GSAP + ScrollTrigger for fading in sections
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.fadein').forEach((section) => {
    gsap.fromTo(section, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // starts the animation when near the viewport
        }
      }
    );
  });
});

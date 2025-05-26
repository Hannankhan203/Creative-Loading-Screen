document.addEventListener("DOMContentLoaded", () => {
  const loaderBar = document.querySelector(".loader-bar");
  const loader = document.querySelector(".loader");
  const reveal = document.querySelector(".reveal");
  const content = document.querySelector(".content");
  const fadeInItems = document.querySelectorAll(".fade-in");

  gsap.to(loaderBar, {
    width: "100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => loader.remove(),
      });

      gsap.to(reveal, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(reveal, {
            y: "-100%",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.3,
            onComplete: () => {
              content.classList.remove("hidden");

              gsap.to(fadeInItems, {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 0.8,
                ease: "power2.out",
              });
            },
          });
        },
      });
    },
  });
});

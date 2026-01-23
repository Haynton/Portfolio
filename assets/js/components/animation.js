export default function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.target.offsetTop - b.target.offsetTop)
        .forEach((entry, index) => {
          setTimeout(() => {
            entry.target.classList.add("reveal-active");
          }, index * 300);

          observer.unobserve(entry.target);
        });
    },
    {
      threshold: 0.1,
    },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
}
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  initAnimations();
} else {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.add("reveal-active");
  });
}

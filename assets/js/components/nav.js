export default function initActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  // Fonction pour déterminer quelle section est la plus visible
  function updateActiveLink() {
    let currentSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      // Calcule la hauteur visible de la section
      const distance = Math.abs(rect.top);

      // Garde la section avec la plus grande hauteur visible
      if (rect.top <= 200 && rect.bottom > 0 && distance < minDistance) {
        minDistance = distance;
        currentSection = section;
      }
    });

    // Met à jour le lien actif
    if (currentSection) {
      const id = currentSection.getAttribute("id");
      navLinks.forEach((link) => link.classList.remove("active-link"));

      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active-link");
      }
    }
  }

  // Initialise au chargement
  updateActiveLink();

  // Met à jour lors du scroll avec debounce pour les performances
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(updateActiveLink);
  });

  // Met à jour lors du redimensionnement
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateActiveLink, 100);
  });
}

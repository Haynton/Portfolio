import initAnimations from "./components/animation.js";
import initBasedOnLang from "./components/lang.js";
import initActiveLink from "./components/nav.js";

document.addEventListener("DOMContentLoaded", function () {
  initAnimations();
  initActiveLink();
  initBasedOnLang();
});

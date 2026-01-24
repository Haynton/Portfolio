export default function initLangSwitch() {
  const btnFR = document.getElementById("btn-fr");
  const btnEN = document.getElementById("btn-en");

  // Vérifie la langue enregistrée ou celle du navigateur
  let lang = localStorage.getItem("lang") || navigator.language || "fr";
  lang = lang.startsWith("en") ? "en" : "fr";

  const isEnglishPage = location.pathname.startsWith("/en/");

  // Redirection automatique seulement si la page ne correspond pas
  if (lang === "en" && !isEnglishPage) {
    location.replace("/en/index.html");
    return; // stoppe le reste du script sur cette page
  }
  if (lang === "fr" && isEnglishPage) {
    location.replace("/index.html");
    return;
  }

  // Mise à jour visuelle des boutons
  const updateButtons = () => {
    if (lang === "en") {
      btnEN.classList.add("bg-slate-800", "text-white");
      btnFR.classList.remove("bg-slate-800", "text-white");
    } else {
      btnFR.classList.add("bg-slate-800", "text-white");
      btnEN.classList.remove("bg-slate-800", "text-white");
    }
  };

  updateButtons();

  // Événements sur les boutons pour switcher
  btnFR.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("lang", "fr");
    if (!location.pathname.startsWith("/index.html")) {
      location.href = "/index.html";
    }
  });

  btnEN.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("lang", "en");
    if (!location.pathname.startsWith("/en/index.html")) {
      location.href = "/en/index.html";
    }
  });
}

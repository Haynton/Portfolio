export default function initBasedOnLang() {
  const savedLang = localStorage.getItem("lang");
  const browserLang = navigator.language || navigator.userLanguage || "fr";

  const lang = savedLang || browserLang;

  // On vérifie si on est déjà sur la page anglaise
  const isEnglishPage = location.pathname.startsWith("/en/");

  if (lang.startsWith("en") && !isEnglishPage) {
    location.replace("/en/index.html"); // chemin correct selon ta structure
  }
}

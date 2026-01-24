export default function initBasedOnLang() {
  const savedLang = localStorage.getItem("lang");
  const browserLang = navigator.language || navigator.userLanguage || "fr";

  const lang = savedLang || browserLang;

  const isEnglishPage = location.pathname.startsWith("/en/");

  if (lang.startsWith("en") && !isEnglishPage) {
    location.replace("/en/index.html");
    return;
  }
  if (!lang.startsWith("en") && isEnglishPage) {
    location.replace("/index.html");
    return;
  }

  document.querySelectorAll('a[href="/index.html"], a[href="/en/index.html"]').forEach((link) => {
    link.addEventListener("click", () => {
      const selectedLang = link.getAttribute("href").includes("/en/") ? "en" : "fr";
      localStorage.setItem("lang", selectedLang);
    });
  });
}

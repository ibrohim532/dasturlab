document.addEventListener("DOMContentLoaded", () => {
  I18N.apply();
  initTheme();
  initLangMenuSimple();
});
function initTheme() {
  const saved = localStorage.getItem("dl_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.textContent = saved === "dark" ? "☀️" : "🌙";
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("dl_theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}
function initLangMenuSimple() {
  const toggle = document.getElementById("lang-toggle");
  const menu = document.getElementById("lang-menu");
  const label = document.getElementById("lang-label");
  if (!toggle || !menu) return;
  label.textContent = I18N.current.toUpperCase();
  toggle.addEventListener("click", (e) => { e.stopPropagation(); menu.classList.toggle("open"); });
  menu.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      I18N.setLang(btn.getAttribute("data-lang"));
      label.textContent = I18N.current.toUpperCase();
      menu.classList.remove("open");
    });
  });
  document.addEventListener("click", () => menu.classList.remove("open"));
}

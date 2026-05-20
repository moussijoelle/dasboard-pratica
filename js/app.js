const toggle = document.getElementById("theme-toggle");
const banner = document.getElementById("banner");
const CLAVE = "dashboard-tema";
const fotoDia = "img/dia.jpeg";
const fotoNoche = "img/noche.jpg";

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  if (toggle) toggle.checked = tema === "abyss";
  localStorage.setItem(CLAVE, tema);
  if (banner) banner.src = tema === "abyss" ? fotoNoche : fotoDia;
}

toggle?.addEventListener("change", () => {
  aplicarTema(toggle.checked ? "abyss" : "valentine");
});

const guardado = localStorage.getItem(CLAVE);
aplicarTema(guardado === "abyss" ? "abyss" : "valentine");

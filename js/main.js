// Menu do celular e destaque da seção ativa
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function fechar() {
  menu.classList.remove("aberto");
  btn.setAttribute("aria-expanded", "false");
}

btn.addEventListener("click", () => {
  const abrir = !menu.classList.contains("aberto");
  menu.classList.toggle("aberto", abrir);
  btn.setAttribute("aria-expanded", String(abrir));
});

menu.addEventListener("click", (e) => { if (e.target.tagName === "A") fechar(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fechar(); });

const links = menu.querySelectorAll("a");
const obs = new IntersectionObserver((itens) => {
  itens.forEach((i) => {
    if (i.isIntersecting) {
      links.forEach((l) => l.classList.toggle("ativo", l.getAttribute("href") === "#" + i.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll(".sec").forEach((s) => obs.observe(s));
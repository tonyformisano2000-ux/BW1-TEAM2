const stars = document.querySelectorAll("#stars span");
let savedIndex = -1;

stars.forEach((star, indice) => {
  star.addEventListener("click", () => {
    savedIndex = indice;
    stars.forEach((s, i) => s.classList.toggle("clicked", i <= savedIndex));
  });

  star.addEventListener("mouseenter", () => {
    stars.forEach((s, i) => s.classList.toggle("clicked", i <= indice));
  });

  star.addEventListener("mouseleave", () => {
    stars.forEach((s, i) => s.classList.toggle("clicked", i <= savedIndex));
  });
});
// js per la parte delle stelle

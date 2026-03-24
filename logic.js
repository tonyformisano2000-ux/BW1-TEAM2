//LOGICA PAGE 2
// timer
let contatore = null;
let nrDomanda = document.querySelectorAll("footer p span");
function avviaTimer() {
  clearInterval(contatore);
  let secondi = 30;
  document.getElementById("numero").textContent = secondi;
  contatore = setInterval(function () {
    secondi = secondi - 1;
    document.getElementById("numero").textContent = secondi;
    let nascosto = 283 - (283 * secondi) / 30;
    document.getElementById("arco").style.strokeDashoffset = nascosto;

    if (secondi <= 0) {
      clearInterval(contatore);
      indice++;
      nrDomanda[0].innerText = indice + 1;
      mostraDomande();
    }
  }, 1000);
}
// fine timer
//SCALA STELLINE
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
// inizio quiz
const domande = [
  {
    domanda: "Chi ha vinto il Mondiale 2006?",
    risposte: ["Francia", "Italia", "Germania", "Brasile"],
    corretta: 1,
  },

  {
    domanda: "Chi è il miglior marcatore della storia della Champions League?",
    risposte: ["Messi", "Cristiano Ronaldo", "Lewandowski", "Benzema"],
    corretta: 1,
  },
  {
    domanda: "In quale squadra ha giocato Diego Armando Maradona in Italia?",
    risposte: ["Juventus", "Roma", "Napoli", "Inter"],
    corretta: 2,
  },
  {
    domanda: "Quanti giocatori ci sono in campo per squadra?",
    risposte: ["9", "10", "11", "12"],
    corretta: 2,
  },
  {
    domanda: "Quale nazionale ha vinto più Mondiali?",
    risposte: ["Italia", "Germania", "Argentina", "Brasile"],
    corretta: 3,
  },
];

let indice = 0;
let punteggio = 0;

const domanda = document.querySelector(".quiz-layout h2");
const bottoni = document.querySelectorAll(".answer-btn");
avviaTimer();

const mostraDomande = function (arr) {
  // SE FINISCONO LE DOMANDE
  if (indice >= domande.length) {
    domanda.innerText = `Quiz finito!! Hai totalizzato ${punteggio} punti su ${domande.length}`;
    bottoni.forEach((bottone) => (bottone.style.display = "none"));
    document.querySelector(".timer").style.display = "none";
    document.querySelector("footer p").style.visibility = "hidden";
    return;
  }

  //RESETTIAMO IL TIMER
  avviaTimer();

  //QUANTE DOMANDE ABBIAMO?
  nrDomanda[1].innerText = `/ ${domande.length}`;

  //MOSTRIAMO SEMPRE LA DOMANDA CORRISPONDENTE
  domanda.innerText = domande[indice].domanda;

  //MOSTRIAMO LE RISPOSTE CORRISPONDENTI
  bottoni.forEach((bottone, i) => {
    bottone.innerText = domande[indice].risposte[i];

    //AL CLICK FAI QUESTO
    bottone.onclick = function () {
      if (i === domande[indice].corretta) {
        punteggio++;
      }
      indice++;

      nrDomanda[0].innerText = indice + 1;

      mostraDomande();
    };
  });
  return punteggio;
};
mostraDomande();

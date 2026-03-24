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
    let nascosto = (283 * secondi) / 30;
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
    const btnNextPage = document.createElement("button");
    btnNextPage.setAttribute("class", "answer-btn");
    bottoni.forEach((bottone) => (bottone.style.display = "none"));
    document.querySelector(".timer").style.display = "none";
    document.querySelector("footer p").style.visibility = "hidden";
    return;
  }

  //RESETTIAMO IL TIMER
  avviaTimer();

  //QUANTE DOMANDE ABBIAMO?
  nrDomanda[0].innerText = `QUESTION  ${indice + 1}`;
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

      nrDomanda[0].innerText = `QUESTION  ${indice + 1}`;

      mostraDomande();
    };
  });
  return punteggio;
};
mostraDomande();

const results = (voto) => {
  const percentualeRisposteCorrette = (voto / domande.length) * 100;
  console.log(percentualeRisposteCorrette + "%");
  const nEserciziCorretti = voto + ` / ${domande.length} questions`;
  console.log(nEserciziCorretti);

  const percentualeRisposteSbagliate = 100 - percentualeRisposteCorrette;
  console.log(percentualeRisposteSbagliate + "% ");

  const nEserciziSbagliati =
    domande.length - voto + ` / ${domande.length} questions`;
  console.log(nEserciziSbagliati);

  const torte = document.getElementsByClassName("torta")[0];
  torte.style.width = "250px";
  torte.style.height = "250px";
  torte.style.borderRadius = "50%";
  torte.style.background = `conic-gradient(#d20094 0% ${percentualeRisposteSbagliate}%, #00ffff ${percentualeRisposteSbagliate}% 100% )`;
  const maskRule = "radial-gradient(circle, transparent 47%, black 47.1%)";
  torte.style.WebkitMaskImage = maskRule;
  torte.style.maskImage = maskRule;
  torte.style.boxShadow = "0 0 10px 10px gold"; // TOCCA CAPIRE PERCHE NON METTE LE SHADOWS
  let innerCircleTextH6 = document.querySelector(".torta>h6");
  let innerCircleTextP = document.querySelector(".torta>p");
  if (voto > 6) {
    innerCircleTextH6.innerHTML =
      "Congratulations!<span><b>You passed the exam</b></span>";
    innerCircleTextP.innerText =
      "We'll send you the certificate in few minutes. check your email (including promotions/spam folder)";
  } else {
    innerCircleTextH6.innerHTML =
      "Oops! <span><b>You failed the exam</b></span>";
    innerCircleTextP.innerText = "come back soon and try again, good luck!";
  }
};

const results = (voto) => {
  const correct = document.getElementById("correct");
  const percentualeRisposteCorrette = (voto / 5) * 100;
  console.log(percentualeRisposteCorrette + "%");
  const nEserciziCorretti = voto + ` / 5 questions`;
  const H3 = document.querySelector("#correct h3");
  const p = document.querySelector("#correct p");
  H3.innerText = percentualeRisposteCorrette;
  p.innerText = nEserciziCorretti;
  const wrong = document.getElementById("wrong");
  const percentualeRisposteSbagliate = 100 - percentualeRisposteCorrette;
  console.log(percentualeRisposteSbagliate + "% ");
  const nEserciziSbagliati = 5 - voto + ` / 5 questions`;
  const WH3 = document.querySelector("#wrong h3");
  const Wp = document.querySelector("#wrong p");
  WH3.innerText = percentualeRisposteSbagliate;
  Wp.innerText = nEserciziCorretti;

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
const punteggio = Number(localStorage.getItem("puntiQuiz")) || 0;
results(4);

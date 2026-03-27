const results = (voto) => {
  const correct = document.getElementById("correct");
  const percentualeRisposteCorrette = Math.round((voto / 20) * 100);

  const H3 = document.querySelector("#correct h3");
  const p = document.querySelector("#correct p");
  H3.innerText = percentualeRisposteCorrette + "%";
  p.innerText = `${voto} / 20 questions`;

  const wrong = document.getElementById("wrong");
  const percentualeRisposteSbagliate = 100 - percentualeRisposteCorrette;

  const WH3 = document.querySelector("#wrong h3");
  const Wp = document.querySelector("#wrong p");
  WH3.innerText = percentualeRisposteSbagliate + "%";
  Wp.innerText = `${20 - voto} / 20 questions`;

  const torte = document.getElementsByClassName("torta")[0];

  torte.style.width = "350px";
  torte.style.height = "350px";
  torte.style.borderRadius = "50%";
  torte.style.background = `conic-gradient(
  #E50914 0%, 
  #E50914 ${percentualeRisposteCorrette}%, 
  #221F1F ${percentualeRisposteCorrette}%, 
  #221F1F 100%
)`;

  const maskRule = "radial-gradient(circle, transparent 47%, black 47.1%)";
  torte.style.WebkitMaskImage = maskRule;
  torte.style.maskImage = maskRule;
  torte.style.boxShadow = "0 0 10px 10px gold";

  let innerCircleTextH6 = document.querySelector(".torta_text>h6");
  let innerCircleTextP = document.querySelector(".torta_text>p");

  if (voto >= 10) {
    innerCircleTextH6.innerHTML =
      "Congratulations!<br><span><b>You passed the exam</b></span>";
    innerCircleTextP.innerText = `We'll send you the certificate
       in few minutes.
        Check your email.`;
  } else {
    innerCircleTextH6.innerHTML = `Oops! 
      <span>
      <b>
      You failed the exam</b>
      </span>`;
    innerCircleTextP.innerText = `Come back soon and try 
     again, good luck!`;
  }
};

const punteggio = Number(localStorage.getItem("punteggioFinale"));
results(punteggio);

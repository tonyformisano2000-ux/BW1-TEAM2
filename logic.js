const FACSIMILEVOTO = 5;
const domanda = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const results = () => {
  const percentualeRisposteCorrette = (FACSIMILEVOTO / domanda.length) * 100;
  console.log(percentualeRisposteCorrette + "%");
  const nEserciziCorretti = FACSIMILEVOTO + ` / ${domanda.length} questions`;
  console.log(nEserciziCorretti);

  const percentualeRisposteSbagliate = 100 - percentualeRisposteCorrette;
  console.log(percentualeRisposteSbagliate + "% ");

  const nEserciziSbagliati =
    domanda.length - FACSIMILEVOTO + ` / ${domanda.length} questions`;
  console.log(nEserciziSbagliati);

  const torte = document.getElementsByClassName("Torte")[0];
  torte.style.width = "250px";
  torte.style.height = "250px";
  torte.style.borderRadius = "50%";
  torte.style.background = `conic-gradient(#d20094 0% ${percentualeRisposteSbagliate}%, #00ffff ${percentualeRisposteSbagliate}% 100% )`;
  const maskRule = "radial-gradient(circle, transparent 47%, black 47.1%)";
  torte.style.WebkitMaskImage = maskRule;
  torte.style.maskImage = maskRule;
  torte.style.boxShadow = "0 0 10px 10px gold"; // TOCCA CAPIRE PERCHE NON METTE LE SHADOWS
  let innerCircleTextH6 = document.querySelector(".Torte>h6");
  let innerCircleTextP = document.querySelector(".Torte>p");
  if (FACSIMILEVOTO > 6) {
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
results(5);

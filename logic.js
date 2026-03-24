const FACSIMILEVOTO = 7;
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
  torte.style.width = "300px";
  torte.style.height = "300px";
  torte.style.borderRadius = "50%";
  torte.style.background = `conic-gradient(#00ffff 0% ${percentualeRisposteSbagliate}% , #970082 ${percentualeRisposteCorrette}% 100%)`;
  const maskRule = "radial-gradient(circle, transparent 55%, black 56%)";
  torte.style.WebkitMaskImage = maskRule;
  torte.style.maskImage = maskRule;
};
results(6);

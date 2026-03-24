const results = (numeroRisposteCorrette) => {
  const percentualeRisposteCorrette = (numeroRisposteCorrette / 10) * 100;
  console.log(percentualeRisposteCorrette + "%");
  const nEserciziCorretti = numeroRisposteCorrette + "in 10 questions";
  console.log(nEserciziCorretti);

  const percentualeRisposteSbagliate = 100 - percentualeRisposteCorrette;
  console.log(percentualeRisposteSbagliate + "% ");

  const nEserciziSbagliati = 10 - numeroRisposteCorrette + "in 10 questions";
  console.log(nEserciziSbagliati);

  const tornte = document.getElementsByClassName("torte");
  tornte.setAttribute("width", "100px");
  tornte.setAttribute("height", "100px");
  tornte.setAttribute("boarderRadius", "50%");
  tornte.setAttribute("backgroundColor", "black");
};

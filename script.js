function jouer(choixJoueur) {
  const options = ['pierre', 'feuille', 'ciseaux'];
  const choixOrdi = options[Math.floor(Math.random() * 3)];

  let resultat = '';
  if (choixJoueur === choixOrdi) {
    resultat = "Égalité !";
  } else if (
    (choixJoueur === 'pierre' && choixOrdi === 'ciseaux') ||
    (choixJoueur === 'feuille' && choixOrdi === 'pierre') ||
    (choixJoueur === 'ciseaux' && choixOrdi === 'feuille')
  ) {
    resultat = "Tu gagnes !";
  } else {
    resultat = "Tu perds !";
  }

  document.getElementById('resultat').textContent = resultat;
  document.getElementById('choix').textContent = `Tu as choisi : ${choixJoueur} | L'ordi a choisi : ${choixOrdi}`;
}
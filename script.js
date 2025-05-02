let modeInfini = false;
let manche = 1;
let scoreJoueur = 0;
let scoreOrdi = 0;

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
    resultat = "Tu gagnes cette manche !";
    scoreJoueur++;
  } else {
    resultat = "Tu perds cette manche !";
    scoreOrdi++;
  }

  document.getElementById('resultat').textContent = resultat;
  document.getElementById('choix').textContent = `Tu as choisi : ${choixJoueur} | L'ordi a choisi : ${choixOrdi}`;
  document.getElementById('score').textContent = `Score : Toi ${scoreJoueur} - ${scoreOrdi} Ordi`;

  if (!modeInfini) {
    document.getElementById('manche').textContent = `Manche : ${manche} / 3`;
    manche++;
    if (manche > 3) {
      let final = '';
      if (scoreJoueur > scoreOrdi) final = "Tu as gagné la partie !";
      else if (scoreOrdi > scoreJoueur) final = "L'ordi a gagné la partie !";
      else final = "Match nul !";

      document.getElementById('fin').textContent = final;
      document.getElementById('rejouer').style.display = "inline-block";
    }
  } else {
    manche++;
    document.getElementById('manche').textContent = `Manche : ${manche}`;
    updateBarre();
  }
}

function activerInfini() {
  modeInfini = true;
  manche = 1;
  scoreJoueur = 0;
  scoreOrdi = 0;
  document.getElementById('stop').style.display = "inline-block";
  document.getElementById('rejouer').style.display = "none";
  updateBarre();
}

function stopInfini() {
  modeInfini = false;
  document.getElementById('fin').textContent = "Tu as arrêté la partie.";
  document.getElementById('stop').style.display = "none";
  document.getElementById('rejouer').style.display = "inline-block";
}

function updateBarre() {
  const barre = document.getElementById('barre');
  barre.value = manche;
  barre.max = 100;
}
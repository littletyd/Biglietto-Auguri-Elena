// ------------------ PARAGRAFI + TITOLO FADE-IN ------------------
const lines = [
  // gruppo 1
  "Ci siamo rotunnati tanto tempo fa,",
  "Quando tra Rieti e Roma ce toccava andà.",
  "Ricordo alcune prime prove canore e serate belle,",
  "Pronunciando al microfono “Cari fratelli e Care sorelle”,",

  // gruppo 2
  "Poi i pensieri sulla vita, le teorie disilluse sull’amore,",
  "I momenti passati insieme, dialoghi che duravano ore,",
  "I viaggi in macchina, le sbronze, i concerti,",
  "Sono questi i ricordi per cui sorridi e ti diverti.",

  // gruppo 3
  "Discussioni e accesi confronti non sono mai mancati, è vero,",
  "Ma è questo che rende il nostro legame sincero.",
  "A volte lontani, rinchiusi nei nostri dolori,",
  "Abbiamo visto e vissuto anche i momenti peggiori.",

  // gruppo 4
  "Io però nei tuoi occhi vedo una passione che non deve finire,",
  "Una dolce magia che mai potrà svanire,",
  "Con tutte le tue gioie e i tuoi sogni, resta sempre bambina,",
  "Ti voglio tanto bene Rotunnina!"
];

// funzione per far comparire titolo e testo in ordine
function showTitleAndLines() {
  const title = document.querySelector('h1');
  title.classList.add('visible'); // titolo visibile

  // dopo 1s inizia il testo
  setTimeout(() => {
    fadeLines(lines);
  }, 1500);
}

function fadeLines(lines, index = 0) {
  if(index >= lines.length) return;

  const el = document.getElementById(`line${index+1}`);
  el.textContent = lines[index];

  // forza il reflow
  void el.offsetWidth;
  
  el.classList.add('visible');

  // attende 2s e passa alla prossima riga
  setTimeout(() => {
    fadeLines(lines, index + 1);
  }, 2000);
}

window.addEventListener('load', () => {
  showTitleAndLines();
});

// ------------------ PULSANTI ANIMATI ------------------
const buttons = document.querySelectorAll('button, .downloadBtn');
buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.transform = "scale(1.1)";
    btn.style.boxShadow = "0 0 25px rgba(255,255,255,0.7)";
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  });
});

// ------------------ CONFETTI ------------------
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  const colors = ['#ff595e','#ffca3a','#8ac926','#1982c4','#6a4c93'];

  for (let i = 0; i < 50; i++) {
    const confetto = document.createElement('span');

    // dimensioni e colore casuali
    const size = Math.random() * 8 + 4;
    confetto.style.width = size + 'px';
    confetto.style.height = size + 'px';
    confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // posizione orizzontale casuale
    confetto.style.left = Math.random() * window.innerWidth + 'px';

    // durata e delay casuali
    const duration = 3 + Math.random() * 3;
    confetto.style.animationDuration = duration + 's';
    confetto.style.animationDelay = Math.random() * 5 + 's';

    confettiContainer.appendChild(confetto);

    // rigenera il confetto dopo la fine dell'animazione
    confetto.addEventListener('animationiteration', () => {
      confetto.style.left = Math.random() * window.innerWidth + 'px';
      confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
  }
}

window.addEventListener('load', createConfetti);
const excuses = [
  "My dog ate my homework.",
  "I lost track of time.",
  "I had a family emergency.",
  "My car broke down.",
  "I was feeling under the weather.",
  "There was a power outage.",
  "I had internet issues.",
  "I was stuck in traffic.",
  "I had a doctor's appointment.",
  "I forgot about the deadline."
];

function generateExcuse() {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  const excuse = excuses[randomIndex];
  document.getElementById('excuse').innerText = excuse;
}
const voltageInput = document.getElementById('voltage');
const capacityInput = document.getElementById('capacity');
const currentInput = document.getElementById('current');

const voltageVal = document.getElementById('voltage-val');
const capacityVal = document.getElementById('capacity-val');
const currentVal = document.getElementById('current-val');

const result = document.getElementById('result');

// Initialanzeigen
voltageVal.textContent = voltageInput.value;
capacityVal.textContent = capacityInput.value;
currentVal.textContent = currentInput.value;

// Event Listener
[voltageInput, capacityInput, currentInput].forEach(input => {
  input.addEventListener('input', update);
});

function update() {
  const voltage = parseFloat(voltageInput.value);
  const capacity = parseFloat(capacityInput.value); // mAh
  const current = parseFloat(currentInput.value);   // mA

  voltageVal.textContent = voltage;
  capacityVal.textContent = capacity;
  currentVal.textContent = current;

  const hours = capacity / current;
  const minutes = (hours - Math.floor(hours)) * 60;

  result.textContent = `Laufzeit: ${Math.floor(hours)} h ${Math.round(minutes)} min`;
}

update(); // initial berechnen

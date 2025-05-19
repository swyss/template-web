const form = document.getElementById('rc-form');
const rSlider = document.getElementById('resistance');
const cSlider = document.getElementById('capacitance');

const rVal = document.getElementById('r-val');
const cVal = document.getElementById('c-val');
const result = document.getElementById('result');

// Initial values
rVal.textContent = rSlider.value;
cVal.textContent = cSlider.value;

[rSlider, cSlider].forEach(input => {
  input.addEventListener('input', () => {
    rVal.textContent = rSlider.value;
    cVal.textContent = cSlider.value;
    computeFrequency();
  });
});

function computeFrequency() {
  const R = parseFloat(rSlider.value); // Ohm
  const C = parseFloat(cSlider.value) * 1e-9; // nF → F

  const f_c = 1 / (2 * Math.PI * R * C); // Hz
  result.textContent = `Grenzfrequenz: ${f_c.toFixed(2)} Hz`;
}

computeFrequency(); // initial calculation

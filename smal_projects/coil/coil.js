const MU_0 = 4 * Math.PI * 1e-7;

document.getElementById('coil-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const turns = parseFloat(document.getElementById('turns').value);
  const mu_r = parseFloat(document.getElementById('mu_r').value);
  const d_inner = parseFloat(document.getElementById('d_inner').value);
  const d_outerInput = document.getElementById('d_outer').value;
  const d_outer = d_outerInput ? parseFloat(d_outerInput) : null;
  const length = parseFloat(document.getElementById('length').value);

  const A = computeArea(d_inner, d_outer);
  const L = (MU_0 * mu_r * Math.pow(turns, 2) * A) / length; // in H

  const resultEl = document.getElementById('result');
  resultEl.textContent = `Induktivität: ${(L * 1e6).toFixed(2)} µH`;
});

function computeArea(innerDia, outerDia) {
  const avgDia = outerDia ? (innerDia + outerDia) / 2 : innerDia;
  return Math.PI * Math.pow(avgDia / 2, 2);
}

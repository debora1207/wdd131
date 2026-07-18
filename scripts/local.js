// Valores estáticos por enquanto 
const temperaturaF = 45;
const velocidadeVentoMph = 12;

// Fórmula do National Weather Service (EUA), em Fahrenheit e mph
function calcularSensacaoTermica(temperatura, vento) {
  return 35.74 + 0.6215 * temperatura - 35.75 * Math.pow(vento, 0.16) + 0.4275 * temperatura * Math.pow(vento, 0.16);
}

const sensacaoTermicaEl = document.getElementById("sensacao-termica");

if (temperaturaF <= 50 && velocidadeVentoMph > 3) {
  sensacaoTermicaEl.textContent = `${calcularSensacaoTermica(temperaturaF, velocidadeVentoMph).toFixed(1)} °F`;
} else {
  sensacaoTermicaEl.textContent = "N/A";
}

// Rodapé: ano atual e data da última modificação do documento
document.getElementById("ano-atual").textContent = new Date().getFullYear();
document.getElementById("ultima-modificacao").textContent = document.lastModified;
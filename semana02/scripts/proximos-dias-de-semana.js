const n = 6; // número de dias adiante

// obtenha o local de saída no documento a ser anexado na lista
const output = document.getElementsByTagName("ul");

// Intl.DateTimeFormat Opções
const options = { weekday: 'long' }; // vs. short, etc.

// INICIO
const hoje = new Date();

// saída com o dia de hoje
let hojestring = new Intl.DateTimeFormat('pt-BR', options).format(hoje);
document.getElementById('hoje').innerHTML = `Hoje é ${hojestring}.`;

// próximos n dias
for (let i = 1; i <= n; i++) {
    const proximaData = new Date();
    proximaData.setDate(hoje.getDate() + i);

    const diaString = new Intl.DateTimeFormat('pt-BR', options).format(proximaData);

    const item = document.createElement("li");
    item.textContent = diaString;
    output[0].appendChild(item);
}
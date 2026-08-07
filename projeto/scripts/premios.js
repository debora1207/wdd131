const corpoTabela = document.querySelector("#tabela-premios tbody");

function criarLinhaPremio(filme) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${filme.nome}</td>
        <td>${filme.ano}</td>
        <td>${filme.premio}</td>
    `;

    return linha;
}

filmes.forEach((filme) => {
    corpoTabela.appendChild(criarLinhaPremio(filme));
});
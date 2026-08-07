// Seleciona os 3 títulos com maior nota crítica para exibir em destaque
const grade = document.getElementById("grade-destaques");

function criarCartaoDestaque(filme) {
    const cartao = document.createElement("div");
    cartao.className = "cartao-filme";

    cartao.innerHTML = `
        <img src="${filme.imagem}" alt="Capa de ${filme.nome}" loading="lazy">
        <div class="conteudo">
            <h3>${filme.nome}</h3>
            <p class="meta">${filme.tipo} · ${filme.genero} · ${filme.faixaEtaria} · ${filme.ano}</p>
            <p>${filme.sinopse}</p>
            <p class="premio">🏆 ${filme.premio}</p>
        </div>
    `;

    return cartao;
}

const destaques = [...filmes]
    .sort((a, b) => b.notaCritica - a.notaCritica)
    .slice(0, 3);

destaques.forEach((filme) => {
    grade.appendChild(criarCartaoDestaque(filme));
});
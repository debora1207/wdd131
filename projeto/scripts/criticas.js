// ===== Críticas da página =====
function criarCartaoCritica(filme) {
    const cartao = document.createElement("div");
    cartao.className = "cartao-filme";

    cartao.innerHTML = `
        <img src="${filme.imagem}" alt="Capa de ${filme.nome}" loading="lazy">
        <div class="conteudo">
            <h3>${filme.nome}</h3>
            <p class="meta">Nota da equipe: ${filme.notaCritica} / 5</p>
            <p>${filme.sinopse}</p>
        </div>
    `;

    return cartao;
}

function renderizarCriticasEquipe() {
    const grade = document.getElementById("grade-criticas");
    filmes.forEach((filme) => {
        grade.appendChild(criarCartaoCritica(filme));
    });
}

renderizarCriticasEquipe();    
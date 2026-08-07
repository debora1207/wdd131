const CHAVE_LOCALSTORAGE = "cineindicaAvaliacoes";

function popularSelectFilmes() {
    const select = document.getElementById("filme");

    filmes.forEach((filme) => {
        const opcao = document.createElement("option");
        opcao.value = filme.nome;
        opcao.textContent = filme.nome;
        select.appendChild(opcao);
    });
}

// ===== Avaliações enviadas pelo usuário =====
function carregarAvaliacoes() {
    const dadosSalvos = localStorage.getItem(CHAVE_LOCALSTORAGE);
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
}

function salvarAvaliacoes(lista) {
    localStorage.setItem(CHAVE_LOCALSTORAGE, JSON.stringify(lista));
}

function criarCartaoAvaliacao(avaliacao) {
    const cartao = document.createElement("div");
    cartao.className = "avaliacao-usuario";

    const textoRecomenda = avaliacao.recomendaria ? "Recomendaria a um amigo" : "Não recomendaria a um amigo";

    cartao.innerHTML = `
        <div class="cabecalho-avaliacao">
            <span>${avaliacao.nome} avaliou ${avaliacao.filme}</span>
            <span>${avaliacao.nota} / 5</span>
        </div>
        <p>${avaliacao.comentario}</p>
        <p class="meta">Assistido em ${avaliacao.data} · ${textoRecomenda}</p>
    `;

    return cartao;
}

function renderizarAvaliacoes(lista) {
    const container = document.getElementById("lista-avaliacoes");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p>Nenhuma avaliação da comunidade ainda. Seja a primeira pessoa a avaliar!</p>`;
        return;
    }

    lista.forEach((avaliacao) => {
        container.appendChild(criarCartaoAvaliacao(avaliacao));
    });
}

// ===== Envio do formulário =====
function tratarEnvioFormulario(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const filme = document.getElementById("filme").value;
    const nota = document.getElementById("nota").value;
    const data = document.getElementById("data-avaliacao").value;
    const comentario = document.getElementById("comentario").value.trim();
    const recomendaria = document.getElementById("recomendaria").checked;

    const mensagemStatus = document.getElementById("mensagem-status");

    if (!nome || !filme || !nota || !data || !comentario) {
        mensagemStatus.textContent = "Por favor, preencha todos os campos obrigatórios.";
        return;
    }

    const novaAvaliacao = { nome, filme, nota, data, comentario, recomendaria };

    const avaliacoes = carregarAvaliacoes();
    avaliacoes.unshift(novaAvaliacao);
    salvarAvaliacoes(avaliacoes);
    renderizarAvaliacoes(avaliacoes);

    mensagemStatus.textContent = `Obrigada pela sua avaliação, ${nome}!`;
    evento.target.reset();
}

popularSelectFilmes();
renderizarAvaliacoes(carregarAvaliacoes());

document.getElementById("formulario-avaliacao").addEventListener("submit", tratarEnvioFormulario);
const grade = document.getElementById("grade-generos");
const containerGenero = document.getElementById("filtros-genero");
const containerIdade = document.getElementById("filtros-idade");

let filtroGeneroAtual = "todos";
let filtroIdadeAtual = "todas";
let termoBuscaAtual = "";

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Cria o HTML de um cartão de filme/série
function criarCartao(filme) {
    const cartao = document.createElement("div");
    cartao.className = "cartao-filme";

    cartao.innerHTML = `
        <img src="${filme.imagem}" alt="Capa de ${filme.nome}" loading="lazy">
        <div class="conteudo">
            <h3>${filme.nome}</h3>
            <p class="meta">${filme.tipo} · ${filme.genero} · ${filme.faixaEtaria} · ${filme.ano}</p>
            <p>${filme.sinopse}</p>
        </div>
    `;

    return cartao;
}

function renderizarFilmes(lista) {
    grade.innerHTML = "";

    if (lista.length === 0) {
        grade.innerHTML = `<p>Nenhum título encontrado para esse filtro.</p>`;
        return;
    }

    lista.forEach((filme) => {
        grade.appendChild(criarCartao(filme));
    });
}

// Busca por nome e os dois filtros (gênero e faixa etária) juntos
function aplicarFiltros() {
    const filtrados = filmes.filter((filme) => {
        const passaGenero = filtroGeneroAtual === "todos" || filme.genero === filtroGeneroAtual;
        const passaIdade = filtroIdadeAtual === "todas" || filme.faixaEtaria === filtroIdadeAtual;
        const passaBusca = removerAcentos(filme.nome).includes(removerAcentos(termoBuscaAtual));
        return passaGenero && passaIdade && passaBusca;
    });

    renderizarFilmes(filtrados);
}

function criarBotoesFiltro(container, valores, atributoData, callback) {
    valores.forEach((valor) => {
        const botao = document.createElement("button");
        botao.textContent = valor;
        botao.dataset[atributoData] = removerAcentos(valor);

        botao.addEventListener("click", () => {
            container.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
            botao.classList.add("ativo");
            callback(valor);
        });

        container.appendChild(botao);
    });
}

const generosUnicos = [...new Set(filmes.map((filme) => filme.genero))];

const ordemIdades = ["Livre", "12 anos", "14 anos", "16 anos", "18 anos"];
const idadesUnicas = [...new Set(filmes.map((filme) => filme.faixaEtaria))]
    .sort((a, b) => ordemIdades.indexOf(a) - ordemIdades.indexOf(b));

criarBotoesFiltro(containerGenero, generosUnicos, "genero", (valor) => {
    filtroGeneroAtual = valor;
    aplicarFiltros();
});

criarBotoesFiltro(containerIdade, idadesUnicas, "idade", (valor) => {
    filtroIdadeAtual = valor;
    aplicarFiltros();
});

document.querySelector('[data-genero="todos"]').addEventListener("click", (evento) => {
    containerGenero.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
    evento.target.classList.add("ativo");
    filtroGeneroAtual = "todos";
    aplicarFiltros();
});

document.querySelector('[data-idade="todas"]').addEventListener("click", (evento) => {
    containerIdade.querySelectorAll("button").forEach((b) => b.classList.remove("ativo"));
    evento.target.classList.add("ativo");
    filtroIdadeAtual = "todas";
    aplicarFiltros();
});

// Busca por nome
document.getElementById("busca-titulo").addEventListener("input", (evento) => {
    termoBuscaAtual = evento.target.value;
    aplicarFiltros();
});

document.getElementById("form-busca").addEventListener("submit", (evento) => {
    evento.preventDefault();
});

// Exibe todos os títulos ao carregar a página
renderizarFilmes(filmes);
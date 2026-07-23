document.getElementById("anoatual").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    "Última atualização: " + document.lastModified;

// ===== Menu hambúrguer responsivo =====
const menuBtn = document.getElementById("menu-btn");
const navegacao = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
    navegacao.classList.toggle("aberto");
    menuBtn.classList.toggle("aberto");
});

// ===== Galeria de templos =====
const galeria = document.getElementById("galeria-templos");
const linksNav = document.querySelectorAll("header nav a");

function extrairAno(consagracao) {
    return parseInt(consagracao.split(",")[0], 10);
}

function criarCartaoTemplo(templo) {
    const cartao = document.createElement("div");
    cartao.className = "cartao-templo";

    cartao.innerHTML = `
        <h2>${templo.nomeDoTemplo}</h2>
        <p><strong>Localização:</strong> ${templo.localizacao}</p>
        <p><strong>Consagração:</strong> ${templo.consagracao}</p>
        <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés²</p>
        <img src="${templo.urlDaImagem}" alt="${templo.nomeDoTemplo}" loading="lazy">
    `;

    return cartao;
}

function renderizarTemplos(lista) {
    galeria.innerHTML = "";
    lista.forEach((templo) => {
        galeria.appendChild(criarCartaoTemplo(templo));
    });
}

function filtrarTemplos(filtro) {
    switch (filtro) {
        case "antigos":
            return templos.filter((templo) => extrairAno(templo.consagracao) < 1900);
        case "novos":
            return templos.filter((templo) => extrairAno(templo.consagracao) > 2000);
        case "grandes":
            return templos.filter((templo) => templo.area > 90000);
        case "pequenos":
            return templos.filter((templo) => templo.area < 10000);
        default:
            return templos;
    }
}

linksNav.forEach((link) => {
    link.addEventListener("click", (evento) => {
        evento.preventDefault();

        const filtro = link.dataset.filtro;
        renderizarTemplos(filtrarTemplos(filtro));
        
        linksNav.forEach((l) => l.classList.remove("ativo"));
        link.classList.add("ativo");
        
        navegacao.classList.remove("aberto");
        menuBtn.classList.remove("aberto");
    });
});

// Exibe todos os templos ao carregar a página
renderizarTemplos(templos);
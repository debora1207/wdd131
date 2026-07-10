// Preenche o ano atual no rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();

// Preenche a data da última modificação do documento
document.getElementById("ultimaModificacao").textContent =
    "Última atualização: " + document.lastModified;

// Menu hambúrguer responsivo
const menuBtn = document.getElementById("menu-btn");
const navegacao = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
    navegacao.classList.toggle("aberto");
    menuBtn.classList.toggle("aberto");
});
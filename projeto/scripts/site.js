// ===== Menu hambúrguer responsivo =====
const menuBtn = document.getElementById("menu-btn");
const navegacao = document.querySelector("header nav");

menuBtn.addEventListener("click", () => {
    navegacao.classList.toggle("aberto");
    menuBtn.classList.toggle("aberto");
});

// ===== Rodapé =====
const anoAtualEl = document.getElementById("anoatual");
if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
}

const ultimaModEl = document.getElementById("ultimaModificacao");
if (ultimaModEl) {
    ultimaModEl.textContent = `Última atualização: ${document.lastModified}`;
}
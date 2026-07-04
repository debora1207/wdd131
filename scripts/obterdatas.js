// Preenche o ano atual no rodapé
document.getElementById("anoatual").textContent = new Date().getFullYear();

// Preenche a data da última modificação do documento
document.getElementById("ultimaModificacao").textContent =
    "Última atualização: " + document.lastModified;
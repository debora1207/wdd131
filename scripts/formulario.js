function preencherSelectDeProdutos() {
  const seletorProduto = document.getElementById("produto");

  produtos.forEach((produto) => {
    const opcao = document.createElement("option");
    opcao.value = produto.id;
    opcao.textContent = produto.nome;
    seletorProduto.appendChild(opcao);
  });
}

document.addEventListener("DOMContentLoaded", preencherSelectDeProdutos);
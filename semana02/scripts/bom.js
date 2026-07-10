const inputCapitulo = document.getElementById("favchap");
const botaoAdicionar = document.getElementById("add-btn");
const listaCapitulos = document.getElementById("list");

const novoItem = document.createElement("li");

const botaoExcluir = document.createElement("button");
botaoExcluir.classList.add("delete");

novoItem.textContent = inputCapitulo.value;

botaoExcluir.textContent = "❌";
botaoExcluir.setAttribute("aria-label", `Excluir ${inputCapitulo.value}`);

novoItem.appendChild(botaoExcluir);

listaCapitulos.appendChild(novoItem);
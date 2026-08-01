const CHAVE_CONTADOR = "avaliacoesConcluidas";

function nomeDoProduto(id) {
  const produto = produtos.find((item) => item.id === id);
  return produto ? produto.nome : null;
}

function textoDaClassificacao(valor) {
  if (!valor) return null;
  const estrelas = "★".repeat(Number(valor)) + "☆".repeat(5 - Number(valor));
  return `${estrelas} (${valor}/5)`;
}

function textoDosRecursos(lista) {
  const rotulos = {
    durabilidade: "Durabilidade",
    "facilidade-de-uso": "Facilidade de Uso",
    desempenho: "Desempenho",
    design: "Design",
  };
  if (!lista.length) return null;
  return lista.map((valor) => rotulos[valor] || valor).join(", ");
}

function formatarData(valorISO) {
  if (!valorISO) return null;
  const [ano, mes, dia] = valorISO.split("-");
  if (!ano || !mes || !dia) return valorISO;
  return `${dia}/${mes}/${ano}`;
}

function montarResumo() {
  const parametros = new URLSearchParams(window.location.search);
  const listaResumo = document.getElementById("lista-resumo");
  const mensagemSaudacao = document.getElementById("mensagem-saudacao");

  const dados = {
    Produto: nomeDoProduto(parametros.get("produto")),
    "Classificação Geral": textoDaClassificacao(parametros.get("classificacao")),
    "Data de Instalação": formatarData(parametros.get("data-instalacao")),
    "Recursos Úteis": textoDosRecursos(parametros.getAll("recursos")),
    "Avaliação Escrita": parametros.get("avaliacao") || null,
  };

  const nomeUsuario = parametros.get("nome-usuario");
  mensagemSaudacao.textContent = nomeUsuario
    ? `Obrigado pela sua avaliação, ${nomeUsuario}!`
    : "Obrigado pela sua avaliação!";

  // Se não houver nenhum parâmetro (página aberta diretamente), não mostra o resumo.
  const houveEnvio = [...parametros.keys()].length > 0;
  if (!houveEnvio) {
    document.getElementById("secao-resumo").hidden = true;
    return;
  }

  Object.entries(dados).forEach(([rotulo, valor]) => {
    if (!valor) return;
    const termo = document.createElement("dt");
    termo.textContent = rotulo;
    const definicao = document.createElement("dd");
    definicao.textContent = valor;
    listaResumo.appendChild(termo);
    listaResumo.appendChild(definicao);
  });
}

function atualizarContador() {
  const contadorAtual = Number(localStorage.getItem(CHAVE_CONTADOR)) || 0;
  const novoContador = contadorAtual + 1;
  localStorage.setItem(CHAVE_CONTADOR, novoContador);
  document.getElementById("valor-contador").textContent = novoContador;
}

document.addEventListener("DOMContentLoaded", () => {
  montarResumo();
  atualizarContador();
});
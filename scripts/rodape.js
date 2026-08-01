function formatarDataHora(data) {
  const dois = (numero) => String(numero).padStart(2, "0");
  const mes = dois(data.getMonth() + 1);
  const dia = dois(data.getDate());
  const ano = data.getFullYear();
  const hora = dois(data.getHours());
  const minuto = dois(data.getMinutes());
  const segundo = dois(data.getSeconds());
  return `${mes}/${dia}/${ano} ${hora}:${minuto}:${segundo}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const anoAtual = document.getElementById("anoatual");
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  const ultimaModificacao = document.getElementById("ultimaModificacao");
  if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última atualização: ${formatarDataHora(new Date(document.lastModified))}`;
  }
});
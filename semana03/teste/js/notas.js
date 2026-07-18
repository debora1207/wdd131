let notas = [100, 72, 83, 94, 88, 87];
let acumulador = 0;
let count = 0;
notas.forEach(score => {
  if (score > 87) {
    acumulador += score;
    count++;
  }
});
if (count > 0) {
  console.log(acumulador / count);
} else {
  console.log("Nenhuma nota informada.");
}
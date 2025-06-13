console.log("----------------------------------------------");
console.log("Início do processamento das notas dos atletas.");
console.log("----------------------------------------------");

console.log("");


// Array de objetos representando os atletas e suas notas
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];

// Loop para iterar sobre cada atleta no array
for (let i = 0; i < atletas.length; i++) {
   // Obtém o objeto do atleta atual
   let atleta = atletas[i];
   // Imprime o nome do atleta
   console.log(`Atleta: ${atleta.nome}`);

   // Obtém o array de notas originais do atleta
   let notasOriginais = atleta.notas;
   // Imprime as notas originais separadas por vírgula
   console.log(`Notas Obtidas: ${notasOriginais.join(", ")}`);

   // Cria uma cópia do array de notas e a ordena em ordem crescente
   let notasOrdenadas = atleta.notas.slice().sort(function(a, b) {
       return a - b;
   });

   // Remove a menor e a maior nota, mantendo as 3 notas do meio
   let notasValidas = notasOrdenadas.slice(1, 4);

   // Inicializa a variável para somar as notas válidas
   let somaDasNotas = 0;

   // Itera sobre as notas válidas e as soma
   notasValidas.forEach(function(nota) {
       somaDasNotas = somaDasNotas + nota;
   });

   // Calcula a média das notas válidas
   let media = somaDasNotas / notasValidas.length;

   // Imprime a média válida formatada com duas casas decimais
   console.log(`Média Válida: ${media.toFixed(2)}`);

   // Imprime uma linha em branco para separar os resultados dos atletas
   console.log("");
}

console.log("-------------------------------------------");
console.log("Fim do processamento das notas dos atletas.");
console.log("-------------------------------------------");
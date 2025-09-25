let nome = prompt("Digite o seu nome");
let somar_notas = 0;
let media = 0;
let notas = [];

for (let i = 0; i < 3; i++) {
    let nota = prompt("Digite a nota " + (i + 1));
    notas.push(parseFloat(nota));
}

for (let i = 0; i < notas.length; i++) {
    somar_notas += notas[i]
} 

media = somar_notas / notas.length

alert("Olá " + nome + ", sua média é: " + media.toFixed(2));

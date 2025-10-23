alert("Calcular o IMC");

let altura = parseFloat(prompt("Informe a altura (em cm):"));
let peso = parseFloat(prompt("Informe o peso (em kg):"));

function calcularIMC(altura, peso) {
    let medida = peso / (altura * altura);
    let frase;

    if (medida >= 40.0) {
        frase = "Classificação: Obesidade grave - Grau: III";
    } else if (medida >= 30.0) {
        frase = "Classificação: Obesidade - Grau: II";
    } else if (medida >= 25.0) {
        frase = "Classificação: Sobrepeso - Grau: I";
    } else if (medida >= 18.5) {
        frase = "Classificação: Normal - Grau: 0";
    } else {
        frase = "Classificação: Magreza - Grau: 0";
    }

    return `Seu IMC é ${medida.toFixed(2)} \n ${frase}`;
}

alert(calcularIMC(altura, peso));

while (true) {
    let escolha_pc = Math.random();
    let escolha_jogador = prompt("Faça a sua escolha: \n\n 1: Pedra \n 2: Papel \n 3: Tesoura \n 4: Sair");

    let escolha = parseInt(escolha_jogador);

    if (escolha === 4) {
        break;
    }

    if (![1, 2, 3].includes(escolha)) {
        alert("Escolha uma opção válida");
        continue;
    }

    // PC escolhe Papel
    if (escolha_pc < 0.33) {
        if (escolha === 1) {
            alert("Escolha do PC: Papel \nSua Escolha: Pedra \n\n VOCÊ PERDEU!!");
        } else if (escolha === 2) {
            alert("Escolha do PC: Papel \nSua Escolha: Papel \n\n EMPATE!!");
        } else if (escolha === 3) {
            alert("Escolha do PC: Papel \nSua Escolha: Tesoura \n\n VOCÊ GANHOU!!");
        }
    }

    // PC escolhe Pedra
    else if (escolha_pc >= 0.33 && escolha_pc < 0.66) {
        if (escolha === 1) {
            alert("Escolha do PC: Pedra \nSua Escolha: Pedra \n\n EMPATE!!");
        } else if (escolha === 2) {
            alert("Escolha do PC: Pedra \nSua Escolha: Papel \n\n VOCÊ GANHOU!!");
        } else if (escolha === 3) {
            alert("Escolha do PC: Pedra \nSua Escolha: Tesoura \n\n VOCÊ PERDEU!!");
        }
    }

    // PC escolhe Tesoura
    else {
        if (escolha === 1) {
            alert("Escolha do PC: Tesoura \nSua Escolha: Pedra \n\n VOCÊ GANHOU!!");
        } else if (escolha === 2) {
            alert("Escolha do PC: Tesoura \nSua Escolha: Papel \n\n VOCÊ PERDEU!!");
        } else if (escolha === 3) {
            alert("Escolha do PC: Tesoura \nSua Escolha: Tesoura \n\n EMPATE!!");
        }
    }
}

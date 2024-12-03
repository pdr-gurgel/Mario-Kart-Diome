const jogador1 = {
    nome: "Luigi",
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontuacao: 0
}

const jogador2 = {
    nome: "Mario",
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontuacao: 0,
}

async function rolarDados() {
    return Math.floor(Math.random() * 6 + 1);
}

async function roletarBloco() {
    let resultado;
    numeroSorteio = Math.floor(Math.random() * 3 + 1);

    switch(numeroSorteio) {
        case 1: 
        resultado = "Reta";
            break;
        case 2:
        resultado = "Curva";
            break;
        case 3:
        resultado = "Confronto";
            break;
    }

    return resultado;
}

async function logGiroDado(nomePersonagem, tipoCorrida, dadoResultado, atributo) {
    console.log(`${nomePersonagem} 🎲 rolou um dado de ${tipoCorrida} : ${dadoResultado} + ${atributo} = ${dadoResultado + atributo}`)
}

async function ativarCorrida(personagem1, personagem2) {
    for(let rodada = 1; rodada <= 5; rodada++) {
        console.log(`🏁 | A Rodada ${rodada} está ocorrendo agora!`)

        // Sorteio do Bloco
        let bloco = await roletarBloco();
        console.log(`Bloco: ${bloco}`);

        // Rolar os Dados
        let dadoJogador1 = await rolarDados();
        let dadoJogador2 = await rolarDados();

        // Teste de Habilidade
        let totalHabilidade1 = 0;
        let totalHabilidade2 = 0;

        if(bloco === "Reta") {
            totalHabilidade1 = dadoJogador1 + personagem1.velocidade;
            totalHabilidade2 = dadoJogador2 + personagem2.velocidade;

            logGiroDado(personagem1.nome, "velocidade", dadoJogador1, personagem1.velocidade);
            logGiroDado(personagem2.nome, "velocidade", dadoJogador2, personagem2.velocidade);

        } else if(bloco === "Curva") {
            totalHabilidade1 = dadoJogador1 + personagem1.manobrabilidade;
            totalHabilidade2 = dadoJogador2 + personagem2.manobrabilidade;

            logGiroDado(personagem1.nome, "manobrabilidade", dadoJogador1, personagem1.manobrabilidade);
            logGiroDado(personagem2.nome, "manobrabilidade", dadoJogador2, personagem2.manobrabilidade);

        } else {
            let PoderTotal1 = dadoJogador1 + personagem1.poder;
            let PoderTotal2 = dadoJogador2 + personagem2.poder;

            console.log(`${personagem1.nome} confrontou o ${personagem2.nome}! 🥊`)

            logGiroDado(personagem1.nome, "poder", dadoJogador1, personagem1.poder);
            logGiroDado(personagem2.nome, "poder", dadoJogador2, personagem2.poder);

            if(PoderTotal1 > PoderTotal2 && personagem2.pontuacao > 0) {
                console.log(`${personagem1.nome} Venceu o confronto! E o ${personagem2.nome} perdeu um ponto!`);
                personagem2.pontuacao--;
            } else if(PoderTotal2 > PoderTotal1 && personagem1.pontuacao > 0) {
                console.log(`${personagem2.nome} Venceu o confronto! E o ${personagem1.nome} perdeu um ponto!`);
                personagem1.pontuacao--;
            } else if(PoderTotal1 === PoderTotal2) {
                console.log("Confronto empatado! Nenhum ponto perdido");
            }

        }

        // TESTE VENCEDOR
        if(totalHabilidade1 > totalHabilidade2){
            console.log(`O ${personagem1.nome} venceu a disputa e marcou 1 ponto!`);
            personagem1.pontuacao++;
        } else if (totalHabilidade2 > totalHabilidade1) {
            console.log(`O ${personagem2.nome} venceu a disputa e marcou 1 ponto!`);
            personagem2.pontuacao++;
        } else {
            console.log("Um empate ocorreu! Nenhum ponto foi marcado.")
        }

        console.log("------------------------------------------------------------------------------")
    }
}

async function  VencedorFinal(personagem1, personagem2) {
    console.log("Resultado Final:");
    console.log(`${personagem1.nome} obteve a pontuação: ${personagem1.pontuacao} ponto(s)`);
    console.log(`${personagem2.nome} obteve a pontuação: ${personagem2.pontuacao} ponto(s)`);

    if(personagem1.pontuacao > personagem2.pontuacao) {
        console.log(`\n ${personagem1.nome} venceu a corrida! Parabéns 🏆`)
    } else if(personagem2.pontuacao > personagem1.pontuacao) {
        console.log(`\n ${personagem2.nome} venceu a corrida! Parabéns 🏆`)
    } else {
        console.log(`\n A corrida acabou em um empate!`)
    }
}


(async function main() {
    console.log(`🚦🏁 | Corrida Começando! ${jogador1.nome} VS ${jogador2.nome}...\n`);
    
    await ativarCorrida(jogador1, jogador2);
    await VencedorFinal(jogador1, jogador2);
})();
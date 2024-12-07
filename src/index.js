const characterList = require('./characters'); // Arquivo com os personagens disponíveis
const readline = require('readline'); // Readline para Input e Output

// Configuração da interface
const select = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let jogador1 = null;
let jogador2 = null;

// Função que converte readline.question para usar Promises
function perguntar(question) {
    return new Promise((resolve) => {
        select.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Função para selecionar os jogadores
async function selectChar() {
    console.log('🖐 | Olá! Sejam bem-vindos ao Mario Kart Terminal Game!');

    // Listar personagens
    console.log('\n📄 | Atualmente, contamos com a seguinte lista de personagens:');
    characterList.forEach((character, indice) => {
        console.log(`${indice + 1}: ${character.nome} - Velocidade: ${character.velocidade}, Manobrabilidade: ${character.manobrabilidade}, Poder: ${character.poder}`);
    });

    // Pergunta para o Jogador 1
    const respost1 = await perguntar("\n🎮 | Jogador 1, qual personagem deseja escolher? ");
    const selected1 = parseInt(respost1, 10) - 1;
    jogador1 = characterList[selected1];
    jogador1.pontuacao = 0; // Adiciona pontuação inicial
    console.log(`🎮 | Jogador 1 escolheu o personagem: ${jogador1.nome}`);

    // Pergunta para o Jogador 2
    const respost2 = await perguntar("\n🕹 | E quanto a você jogador 2? Qual personagem você escolhe? ");
    const selected2 = parseInt(respost2, 10) - 1;
    jogador2 = characterList[selected2];
    jogador2.pontuacao = 0; // Adiciona pontuação inicial
    console.log(`🕹 | Jogador 2 escolheu o personagem: ${jogador2.nome}`);

    select.close(); // Fecha a interface readline
}

// Função de Rolar os Dados
async function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

// Função de Rolar Blocos
async function rollBlock() {
    let result;
    number = Math.floor(Math.random() * 3 + 1);

    switch(number) {
        case 1: 
        result = "Reta";
            break;
        case 2:
        result = "Curva";
            break;
        case 3:
        result = "Confronto";
            break;
    }

    return result;
}

// Log do giro de Dados
async function logRollDice(nomePersonagem, tipoCorrida, dadoResultado, atributo) {
    console.log(`${nomePersonagem} 🎲 rolou um dado de ${tipoCorrida} : ${dadoResultado} + ${atributo} = ${dadoResultado + atributo}`)
}

// Função para começar a corrida
async function startRun(personagem1, personagem2) {
    for(let rodada = 1; rodada <= 5; rodada++) {
        console.log(`🏁 | A Rodada ${rodada} está ocorrendo agora!`)

        // Sorteio do Bloco
        let block = await rollBlock();
        console.log(`Bloco: ${block}`);

        // Rolar os Dados
        let dadoJogador1 = await rollDice();
        let dadoJogador2 = await rollDice();

        // Teste de Habilidade
        let totalHabilidade1 = 0;
        let totalHabilidade2 = 0;

        if(block === "Reta") {
            totalHabilidade1 = dadoJogador1 + personagem1.velocidade;
            totalHabilidade2 = dadoJogador2 + personagem2.velocidade;

            logRollDice(personagem1.nome, "velocidade", dadoJogador1, personagem1.velocidade);
            logRollDice(personagem2.nome, "velocidade", dadoJogador2, personagem2.velocidade);

        } else if(block === "Curva") {
            totalHabilidade1 = dadoJogador1 + personagem1.manobrabilidade;
            totalHabilidade2 = dadoJogador2 + personagem2.manobrabilidade;

            logRollDice(personagem1.nome, "manobrabilidade", dadoJogador1, personagem1.manobrabilidade);
            logRollDice(personagem2.nome, "manobrabilidade", dadoJogador2, personagem2.manobrabilidade);

        } else {
            let PoderTotal1 = dadoJogador1 + personagem1.poder;
            let PoderTotal2 = dadoJogador2 + personagem2.poder;

            console.log(`${personagem1.nome} confrontou o ${personagem2.nome}! 🥊`)

            logRollDice(personagem1.nome, "poder", dadoJogador1, personagem1.poder);
            logRollDice(personagem2.nome, "poder", dadoJogador2, personagem2.poder);

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

// Função de resultado do vencedor da Corrida
async function  finalWinner(personagem1, personagem2) {
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

(async function main(params) {
    await selectChar();
    console.log(`🚦🏁 | Corrida Começando! ${jogador1.nome} VS ${jogador2.nome}...\n`);

    await startRun(jogador1, jogador2);
    await finalWinner(jogador1, jogador2);
})();
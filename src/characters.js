class Character {
    // Constructor para estabelecer os personagens de maneira Clean
    constructor(nome, velocidade, manobrabilidade, poder, pontuacao) {
        this.nome = nome;
        this.velocidade = velocidade;
        this.manobrabilidade = manobrabilidade;
        this.poder = poder;
        this.pontuacao = pontuacao;
    }
}

// Criação dos Personagens
const Luigi = new Character('Luigi', 3, 4, 4, 0);
const Mario = new Character('Mario', 4, 3, 3, 0);
const Peach = new Character('Peach', 3, 4, 2, 0);
const Yoshi = new Character('Yoshi', 2, 4, 3, 0);
const Bowser = new Character('Bowser', 5, 2, 5, 0);
const Donkey_Kong = new Character("Donkey Kong", 2, 2, 5, 0);

// Variável de Personagens
const characterList = [Luigi, Mario, Peach, Yoshi, Bowser, Donkey_Kong];

module.exports = characterList;
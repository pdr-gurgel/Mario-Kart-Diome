# 🚦 Mario Kart.JS: Desafio de Projeto em NODEJS 🚦

Mario Kart é uma série de jogos de corrida desenvolvida pela Nintendo. Este projeto é um desafio divertido e interativo, cujo objetivo é simular corridas do Mario Kart usando JavaScript, implementando lógica de jogabilidade com base em atributos dos personagens, sorteios e mecânicas específicas.

---

## 🎯 Objetivo
Criar a lógica de um jogo que simula corridas de Mario Kart, considerando regras e mecânicas que tornam cada corrida emocionante e imprevisível. 

Os jogadores competem em 5 rodadas por uma pista aleatória que desafia habilidades de velocidade, manobrabilidade e poder. O vencedor será aquele que acumular mais pontos ao final da corrida.

O objetivo desse desafio para aprimorar as habilidades em nodeJS foi para a criacao de um primeiro projeto pratico e desenvolvimento de logica de programacao.
---

## 🕹️ Regras e Mecânicas

### Jogadores
- O jogo recebe dois personagens, representados como objetos, com atributos distintos.

### Pistas
- Cada corrida ocorre em 5 rodadas, com um sorteio de blocos a cada rodada:
  - **Reta**: Testa a **velocidade** do personagem.
  - **Curva**: Testa a **manobrabilidade**.
  - **Confronto**: Testa o **poder** e o perdedor perde 1 ponto (sem valores negativos).

### Condição de Vitória
- O personagem com maior pontuação ao final das 5 rodadas vence a corrida. 

---

## 👥 Personagens

| Nome          | Velocidade | Manobrabilidade | Poder | Avatar               |
|---------------|------------|-----------------|-------|----------------------|
| Mario         | 4          | 3               | 3     | ![Mario](./docs/mario.gif) |
| Luigi         | 3          | 4               | 4     | ![Luigi](./docs/luigi.gif) |
| Peach         | 3          | 4               | 2     | ![Peach](./docs/peach.gif) |
| Yoshi         | 2          | 4               | 3     | ![Yoshi](./docs/yoshi.gif) |
| Bowser        | 5          | 2               | 5     | ![Bowser](./docs/bowser.gif) |
| Donkey Kong   | 2          | 2               | 5     | ![DK](./docs/dk.gif) |

---

## 🛠️ Tecnologias Utilizadas
- **JavaScript**: Linguagem principal do projeto.
- **Node.js**: Para execução do código no terminal.

---

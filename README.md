# Problema proposto
Coordenadas

Assuma um plano cartesiano de coordenadas X x Y. 

Assumindo uma posição original (x,y), a aplicação irá receber vetores de coordenadas na seguinte forma: 

[Direção, Intensidade], sendo que Direção pode ser N,S,L,O (Norte, Sul, Leste e Oeste) e intensidade é um inteiro. 

Exemplo: Digamos que nosso ponto atual é (1,1) e recebe um vetor [N,10], ele precisa parar na posição (1,11). Se após isso a aplicação receber o vetor [L,5], a posição atual deve ser (6,11). 

## How to run
1. Clone this repository

2. Install dependencies running in repository directory 
  ```bash
  npm i
  ```

7. You can run the application using
  ```bash
  npm run dev
  ```
  
8. You can test the cases running
  ```bash
  npm t 
  ```
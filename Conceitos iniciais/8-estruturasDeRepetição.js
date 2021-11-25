console.log(`trabalhando com repetição`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    );

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada;
const destino = "Rio de Janeiro";
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;

let destinidoExiste = false;

while(contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinidoExiste = true
        break;
    }
    contador++;
}
if(destinidoExiste)
    console.log("Destino existe");
else
    console.log("Destino não existe");


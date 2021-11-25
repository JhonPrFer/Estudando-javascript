console.log(`trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
    );

const idadeComprador = 15;
const estaAcompanhada = false;
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Boa viagem")
    listaDeDestinos.splice(1,1);
}else
    console.log("Comprador menor de idade e não está acompanhado não pode vender")


console.log(listaDeDestinos)


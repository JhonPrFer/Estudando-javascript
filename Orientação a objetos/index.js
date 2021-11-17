import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 =  new Cliente();

cliente1.nome = "João";
cliente1.cpf = 242451;

const cliente2 = new Cliente();
cliente2.nome = "Alice"
cliente2.cpf = 3139141

const contaJoao = new ContaCorrente();
contaJoao.agencia = 3414
contaJoao.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2

contaJoao.depositar(500);

contaJoao.transferir(233,conta2)
console.log(contaJoao)
console.log(conta2)




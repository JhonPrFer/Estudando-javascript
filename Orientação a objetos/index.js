class Cliente{  
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    #saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -+ valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        
        this.#saldo += valor;
    }
}

const cliente1 =  new Cliente();

cliente1.nome = "João";
cliente1.cpf = 242451;

const cliente2 = new Cliente()
cliente2.nome = "Alice"
cliente2.cpf = 3139141

console.log(cliente1, cliente2)



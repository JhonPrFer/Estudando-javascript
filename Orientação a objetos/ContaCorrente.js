import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _saldo = 0;
    _cliente

    set cliente(cliente){
        if(cliente instanceof Cliente)
            this._cliente = cliente
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -+ valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia
    }
}
const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function depositar(valorDeposito) {
        this.saldo = this.saldo + valorDeposito;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            valor: valorDeposito
        }
        console.log(`Deposito de R$ ${valorDeposito.toFixed(2)} realizado para o cliente: ${this.nome}.`);
    },
    sacar: function sacar(valorSaque) {
        if (valorSaque > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } else {
            this.saldo = this.saldo - valorSaque;
            this.historicos[this.historicos.length] = {
                tipo: "Saque",
                valor: valorSaque,
            };
            console.log(`Saque de R$ ${valorSaque.toFixed(2)} realizado para o cliente: ${this.nome}.`)
        }
    },
    extrato: function extrato(){
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log('Histórico:');
        for (let i of this.historicos) {
            console.log(`${i.tipo} de R$ ${i.valor.toFixed(2)}`);
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
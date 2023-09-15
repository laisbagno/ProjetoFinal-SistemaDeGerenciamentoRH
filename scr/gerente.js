const Funcionario = require("./funcionario");

 // Classe Gerente (Herda de Funcionario)
 class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
      super(nome, idade); // Chama o construtor da classe pai
      this.departamento = departamento;
    }
  
    // Método para exibir informações do gerente, incluindo o departamento
    exibirInformacoes() {
      super.exibirInformacoes(); // Chama o método da classe pai
      console.log(`Departamento: ${this.departamento}`);
    }
  }
  
  // Exemplo de uso
  const gerente1 = new Gerente("Carlos", 35, "RH");
  const gerente2 = new Gerente("Ana", 40, "Vendas");

  gerente1.exibirInformacoes();
  gerente2.exibirInformacoes();
  

  module.exports = Gerente;
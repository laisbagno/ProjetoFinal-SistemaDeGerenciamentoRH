// Classe Funcionario
class Funcionario {
    nome;
    idade;
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    // Método para exibir informações do funcionário
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  }

  const funcionario1 = new Funcionario("Luiza", 20);

  funcionario1.exibirInformacoes();

  module.exports = Funcionario;
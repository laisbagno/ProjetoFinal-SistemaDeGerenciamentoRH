const Funcionario = require("./funcionario");
const Gerente = require("./gerente");
  // Classe Empresa
  class Empresa {
    constructor(nome) {
      this.nome = nome;
      this.funcionarios = [];
      this.salarios = new Map(); // Usando um mapa para associar funcionários aos salários
    }
  
    // Método para contratar um funcionário
    contratarFuncionario(funcionario) {
      this.funcionarios.push(funcionario);
    }
  
    // Método para atribuir um salário a um funcionário
    atribuirSalario(funcionario, salario) {
      if (this.funcionarios.includes(funcionario)) {
        this.salarios.set(funcionario, salario);
      } else {
        console.log(`${funcionario.nome} não é funcionário da ${this.nome}`);
      }
    }
  
    // Método para listar os funcionários da empresa
    listarFuncionarios() {
      console.log(`Funcionários da ${this.nome}:`);
      for (const funcionario of this.funcionarios) {
        console.log(`- ${funcionario.nome}`);
      }
    }
  
    // Método para listar os salários dos funcionários
    listarSalarios() {
      console.log(`Salários dos funcionários da ${this.nome}:`);
      for (const [funcionario, salario] of this.salarios.entries()) {
        console.log(`- ${funcionario.nome}: R$ ${salario.getValor()}`);
      }
    }
  }
  
  const funcionario = new Funcionario("Luiza", 20);
  const gerente1 = new Gerente("Carlos", 35, "RH");
  const gerente2 = new Gerente("Ana", 40, "Vendas");

  const empresaXYZ = new Empresa("XYZ Corp");
  
  empresaXYZ.contratarFuncionario(funcionario);
  empresaXYZ.contratarFuncionario(gerente1);
  empresaXYZ.contratarFuncionario(gerente2);

  module.exports = Empresa;
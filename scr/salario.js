 // Classe Salario
 class Salario {
    #valor;
  
    constructor(valor) {
      this.#valor = valor;
    }
  
    // Método para calcular aumento de salário
    calcularAumento(percentual) {
      this.#valor += (this.#valor * percentual) / 100;
    }
  
    // Método para acessar o valor do salário (getter)
    getValor() {
      return this.#valor;
    }
  }

  const salario = new Salario(5000);
  console.log("Valor Inicial do Salário:", salario.getValor());

  salario.calcularAumento(10);
  console.log("Salário após Aumento:", salario.getValor());

  module.exports = Salario;
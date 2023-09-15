const Empresa = require("./empresa.js");
const Funcionario = require("./funcionario");

describe("Classe Empresa", () => {
    let empresa;
    let funcionario1;
    let funcionario2;
    let salario1;
    let salario2;
  
    beforeEach(() => {
      empresa = new Empresa("XYZ Corp");
      funcionario1 = { nome: "Alice" };
      funcionario2 = { nome: "Bob" };
      salario1 = { getValor: () => 5000 };
      salario2 = { getValor: () => 6000 };
    });
  
    test("Teste do construtor da classe Empresa", () => {
      expect(empresa.nome).toBe("XYZ Corp");
      expect(empresa.funcionarios).toEqual([]);
      expect(empresa.salarios.size).toBe(0);
    });
  
    test("Teste do método contratarFuncionario da classe Empresa", () => {
      empresa.contratarFuncionario(funcionario1);
      expect(empresa.funcionarios).toContain(funcionario1);
    });
  
    test("Teste do método atribuirSalario da classe Empresa", () => {
      empresa.contratarFuncionario(funcionario1);
      empresa.atribuirSalario(funcionario1, salario1);
      expect(empresa.salarios.get(funcionario1)).toBe(salario1);
    });
  
    test("Teste do método listarFuncionarios da classe Empresa", () => {
      empresa.contratarFuncionario(funcionario1);
      empresa.contratarFuncionario(funcionario2);
  
      const logSpy = jest.spyOn(console, "log");
      empresa.listarFuncionarios();
  
      expect(logSpy).toHaveBeenCalledWith("Funcionários da XYZ Corp:");
      expect(logSpy).toHaveBeenCalledWith("- Alice");
      expect(logSpy).toHaveBeenCalledWith("- Bob");
    });
  
    test("Teste do método listarSalarios da classe Empresa", () => {
      empresa.contratarFuncionario(funcionario1);
      empresa.contratarFuncionario(funcionario2);
      empresa.atribuirSalario(funcionario1, salario1);
      empresa.atribuirSalario(funcionario2, salario2);
  
      const logSpy = jest.spyOn(console, "log");
      empresa.listarSalarios();
  
      expect(logSpy).toHaveBeenCalledWith("Salários dos funcionários da XYZ Corp:");
      expect(logSpy).toHaveBeenCalledWith("- Alice: R$ 5000");
      expect(logSpy).toHaveBeenCalledWith("- Bob: R$ 6000");
    });

    test("Teste do método atribuirSalario da classe Empresa (console.log)", () => {
        const logSpy = jest.spyOn(console, "log"); // Espiona a função console.log
      
        const funcionarioNaoListado = { nome: "FuncionarioNaoListado" };
        const salario = { getValor: () => 5000 };
      
        empresa.atribuirSalario(funcionarioNaoListado, salario);
      
        expect(logSpy).toHaveBeenCalledWith(
          `${funcionarioNaoListado.nome} não é funcionário da XYZ Corp`
        );
      
        logSpy.mockRestore();
      });
});
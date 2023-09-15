// gerente.test.js
const Gerente = require("./gerente.js");

describe("Classe Gerente", () => {
    test("Teste do construtor da classe Gerente", () => {
    const gerente = new Gerente("Carlos", 35, "RH");
    expect(gerente.nome).toBe("Carlos");
    expect(gerente.idade).toBe(35);
    expect(gerente.departamento).toBe("RH");
    });

    test("Teste do método exibirInformacoes da classe Gerente", () => {
    const gerente = new Gerente("Ana", 40, "Vendas");
    const logSpy = jest.spyOn(console, "log");
    gerente.exibirInformacoes();
    expect(logSpy).toHaveBeenCalledWith("Nome: Ana, Idade: 40");
    expect(logSpy).toHaveBeenCalledWith("Departamento: Vendas");
    logSpy.mockRestore();
    });
});
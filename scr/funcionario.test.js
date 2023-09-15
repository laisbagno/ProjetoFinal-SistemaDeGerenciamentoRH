// funcioario.test.js
const Funcionario = require("./funcionario.js");

describe("Classe Funcionario", () => {
    test("Teste do construtor da classe Funcionario", () => {
    const funcionario = new Funcionario("Alice", 25);
    expect(funcionario.nome).toBe("Alice");
    expect(funcionario.idade).toBe(25);
    });

    test("Teste do método exibirInformacoes da classe Funcionario", () => {
    const funcionario = new Funcionario("Bob", 30);
    const logSpy = jest.spyOn(console, "log");
    funcionario.exibirInformacoes();
    expect(logSpy).toHaveBeenCalledWith("Nome: Bob, Idade: 30");
    logSpy.mockRestore();
    });
});
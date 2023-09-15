// salario.test.js
const Salario = require("./salario.js");

describe("Classe Salario", () => {
    test("Teste do construtor da classe Salario", () => {
    const salario = new Salario(5000);
    expect(salario.getValor()).toBe(5000);
    });

    test("Teste do método calcularAumento da classe Salario", () => {
    const salario = new Salario(5000);
    salario.calcularAumento(10);
    expect(salario.getValor()).toBe(5500);
    });
});
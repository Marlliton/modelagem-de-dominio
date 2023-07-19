import { Erros } from "@/core/constants/Erros";
import { Cpf } from "@/core/shared/Cpf";

describe("Cpf", () => {
  test("Deve retornar false para uma string vazia", () => {
    expect(Cpf.isValido("")).toBeFalsy()
  })
  
  test("Deve retornar false para uma string incompleta", () => {
    expect(Cpf.isValido("1234")).toBeFalsy()
    expect(Cpf.isValido("123456")).toBeFalsy()
    expect(Cpf.isValido("123456780")).toBeFalsy()
    expect(Cpf.isValido("123.456.789-0")).toBeFalsy()
  })
  
  test("Deve retornar false para uma DV inválidos", () => {
    expect(Cpf.isValido("123.456.789-00")).toBeFalsy()
  })
  
  test("Deve retornar true para um cpf válido", () => {
    expect(Cpf.isValido("280.012.389−38")).toBeTruthy()
    expect(Cpf.isValido("991.134.570-04")).toBeTruthy()
    expect(Cpf.isValido("976.474.580-60")).toBeTruthy()
    expect(Cpf.isValido("697.332.940-39")).toBeTruthy()
  })
  
  test("Deve retornar DV do cpf", () => {
    expect(new Cpf("280.012.389−38").digitoVerificador).toEqual("38")
    expect(new Cpf("991.134.570-04").digitoVerificador).toEqual("04")
    expect(new Cpf("976.474.580-60").digitoVerificador).toEqual("60")
    expect(new Cpf("697.332.940-39").digitoVerificador).toEqual("39")
  })

  test("Deve lançar um erro para um cpf com uma string vazia", () => {
    expect(() => new Cpf()).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf("")).toThrowError(Erros.CPF_INVALIDO)
  })
  
  test("Deve lançar um erro para um cpf com uma string incompleta", () => {
    expect(() => new Cpf("1234")).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf("123456")).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf("123456780")).toThrowError(Erros.CPF_INVALIDO)
    expect(() => new Cpf("123.456.789-0")).toThrowError(Erros.CPF_INVALIDO)
  })
  
  test("Deve lançar um erro para um cpf com o DV inválidos", () => {
    expect(() => new Cpf("123.456.789-00")).toThrowError(Erros.CPF_INVALIDO)
  })

  test("Deve retornar o cpf formatado", () => {
    expect(new Cpf("28001238938").formatado).toEqual("280.012.389-38")
    expect(new Cpf("99113457004").formatado).toEqual("991.134.570-04")
    expect(new Cpf("97647458060").formatado).toEqual("976.474.580-60")
    expect(new Cpf("697.332.940-39").formatado).toEqual("697.332.940-39")
  })

  test("Deve retornar o cpf sem formatação", () => {
    expect(new Cpf("28001238938").valor).toEqual("28001238938")
    expect(new Cpf("99113457004").valor).toEqual("99113457004")
    expect(new Cpf("976.474.580-60").valor).toEqual("97647458060")
    expect(new Cpf("697.332.940-39").valor).toEqual("69733294039")
  })
})
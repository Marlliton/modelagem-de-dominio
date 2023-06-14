import { Erros } from "@/core/constants/Erros";
import { NomePessoa } from "@/core/shared/NomePessoa";

describe("Testar a criação do nome de uma pessoa", () => {
  it("Deve lançar erro ao tentar criar um nome vazio", () => {
    expect(() => new NomePessoa("")).toThrowError(Erros.NOME_VAZIO)
  })

  it("Deve lançar erro ao tentar criar um nome menor que 4 caracteres", () => {
    expect(() => new NomePessoa("A Z")).toThrowError(Erros.NOME_PEQUENO)
  })

  it("Deve lançar erro ao tentar criar um nome maior que 120", () => {
    const nomeGrande = "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"
    expect(() => new NomePessoa(nomeGrande)).toThrowError(Erros.NOME_GRANDE)
  })

  it("Deve lançar erro ao tentar criar um nome sem sobrenome", () => {
    expect(() => new NomePessoa("Guilherme")).toThrowError(Erros.NOME_SEM_SOBRENOME)
  })

  it("Deve lançar erro ao tentar criar um nome com caracteres especiais", () => {
    expect(() => new NomePessoa("João @000joão")).toThrowError(Erros.NOME_CARACTERES_INVALIDOS)
  })

  it("Deve criar um nome com sobrenomes", () => {
    const nome = new NomePessoa("João Silva Pereira")
    expect(nome.completo).toBe("João Silva Pereira")
    expect(nome.primeiroNome).toBe("João")
    expect(nome.sobrenomes).toEqual(["Silva", "Pereira"])
    expect(nome.ultimoNome).toEqual("Pereira")
  })
})
import { Erros } from "@/core/constants/Erros";
import { Pessoa } from "@/core/pessoa/Pessoa";

describe("Pessoa", () => {
  test("Deve falhar ao criar uma pessoa inválida", () => {
    expect(()=> new Pessoa({nome: "", cpf:""})).toThrowError(Erros.NOME_VAZIO)
  })

  test("Deve criar uma pessoa válida", () => {
    const pessoa = new Pessoa({nome: "John Doe", cpf:"976.474.580-60"})
    expect(pessoa).toBeTruthy()
    expect(pessoa._nome).toBeTruthy()
    expect(pessoa._cpf).toBeTruthy()
    expect(pessoa._id).toBeTruthy()
  })
})
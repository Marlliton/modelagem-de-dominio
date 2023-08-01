import { PessoaBuilder } from "@/__test__/data/pessoa/PessoaBuilder";
import { Erros } from "@/core/constants/Erros";
import { Pessoa } from "@/core/pessoa/Pessoa";

describe("Pessoa", () => {
  test("Deve falhar ao criar uma pessoa inválida", () => {
    expect(()=> new Pessoa({nome: "", cpf:""})).toThrowError(Erros.NOME_VAZIO)
  })

  test("Deve criar uma pessoa válida", () => {
    const pessoa = PessoaBuilder.criar().agora()
    expect(pessoa).toBeTruthy()
    expect(pessoa._nome).toBeTruthy()
    expect(pessoa._cpf).toBeTruthy()
    expect(pessoa._id).toBeTruthy()
  })

  test("Deve clonar uma pessoa", () => {
    const pessoa = PessoaBuilder.criar().comNome("John Doe").comCpf("976.474.580-60").agora() //new Pessoa({nome: "John Doe", cpf:"976.474.580-60"})

    const novaPessoa = pessoa.clone({nome: "John Doe Doe"})
    expect(novaPessoa._cpf.formatado).toEqual("976.474.580-60")
    expect(novaPessoa._nome.completo).toEqual("John Doe Doe")
    expect(novaPessoa._id.valor).toEqual(pessoa._id.valor)
  })
})
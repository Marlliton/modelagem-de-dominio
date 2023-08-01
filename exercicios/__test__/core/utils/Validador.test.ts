import { Validador } from "@/core/utils/Validador";

describe("Deve testar as validações", () => {
  it("Deve retornar true para um email válido", () => {
    const valido = Validador.emailValido("marlliton.souza@gmail.com")
    expect(valido).toBe(true)
  })

  it("Deve retornar false para email inválido", () => {
    const valido = Validador.emailValido("marlliton.souzagmail.com")
    expect(valido).toBe(false)
  })

  it("Deve retornar null com texto não nulo", () => {
    const erro = Validador.naoNulo("Bom dia", "Texto inválido")
    expect(erro).toBe(null)
  })

  it("Deve retornar uma msg de erro com texto nulo", () => {
    const msgErro = "Texto inválido"
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro).toBe(msgErro)
  })

  it("Deve retornar null com texto não vazio", () => {
    const erro = Validador.naoVazio("Bom dia", "Texto inválido")
    expect(erro).toBe(null)
  })

  it("Deve retornar uma msg de erro com texto vazio", () => {
    const msgErro = "Texto inválido"
    const erro = Validador.naoVazio('', msgErro)
    expect(erro).toBe(msgErro)
  })

  it("Deve retornar uma msg de erro com texto null", () => {
    const msgErro = "Texto inválido"
    const erro1 = Validador.naoVazio(null, msgErro)
    const erro2 = Validador.naoVazio(undefined, msgErro)
    expect(erro1).toBe(msgErro)
    expect(erro2).toBe(msgErro)
  })

  it("Deve retornar null com texto menor que o tamanho máximo", () => {
    const erro = Validador.tamanhoMenorQue("teste", 6, "texto maior que tamanho máximo")
    expect(erro).toBe(null)
  })

  it("Deve retornar erro com texto maior ou igual ao tamanho máximo", () => {
    const msgErro = "texto maior ou igual ao tamanho máximo"
    const erro = Validador.tamanhoMenorQue("teste", 5, msgErro)
    expect(erro).toBe(msgErro)
  })
  
  it("Deve retornar um array de erros", () => {
    const erroVazio = Validador.naoVazio('', "erro vazio")
    const erroTamanho = Validador.tamanhoMenorQue("teste", 5, "erro tamanho")
    const erros = Validador.combinar(erroVazio, erroTamanho)
    expect(erros?.length).toBeGreaterThan(0)
  })
  
  it("Deve retornar null se não tiver erros", () => {
    const erroVazio = Validador.naoVazio('ABC', "erro vazio")
    const erroTamanho = Validador.tamanhoMenorQue("teste", 6, "erro tamanho")
    const erros = Validador.combinar(erroVazio, erroTamanho)
    expect(erros).toBeNull()
  })
}) 
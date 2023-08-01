import { Entidade, EntidadeProps } from "@/core/shared/Entidade";

interface TesteProps extends EntidadeProps {
  nome?: string
  idade?: number
}

class Teste extends Entidade<Teste, TesteProps> {
  constructor(props: TesteProps) {
    super(props)
  }
}

describe("Testar a classe entidade", () => {
  test("Deve comparar duas entidades diferentes", () => {
    const teste1 = new Teste({nome: "John Doe", idade:  60})
    const teste2 = new Teste({nome: "John Doe", idade:  60})
    expect(teste1.igual(teste2)).toBeFalsy()
    expect(teste1.diferente(teste2)).toBeTruthy()
  })

  test("Deve comparar duas entidades iguais", () => {
    const teste1 = new Teste({nome: "John Doe", idade:  60})
    const teste1Clone = teste1.clone({nome: "Outro jhon"})
    expect(teste1.igual(teste1Clone)).toBeTruthy()
    expect(teste1.diferente(teste1Clone)).toBeFalsy()
  })
  test("Deve comparar entidade undefined ou null", () => {
    const teste1 = new Teste({nome: "John Doe", idade:  60})
    expect(teste1.igual(undefined as any)).toBeFalsy()
    expect(teste1.diferente(undefined as any)).toBeTruthy()
    expect(teste1.igual(null as any)).toBeFalsy()
    expect(teste1.diferente(null as any)).toBeTruthy()
  })
})
import { Erros } from "@/core/constants/Erros";
import {Id} from "@/core/shared/Id"


describe("Testar o objeto de valor Id", () => {
  test("Deve criar um id válido", () => {
    const id = Id.novo
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeTruthy()
  })

  test("Deve lançar erro ao criar um id inválido", () => {
    expect(() => new Id("123")).toThrowError(Erros.ID_INVALIDO)
  })

  test("Deve criar um id válido a partir de outro id", () => {
    const id = new Id(Id.novo.valor)
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeFalsy()
  })

  test("Deve comparar dois ids iguais", () => {
    const id = new Id(Id.novo.valor)

    expect(id.igual(id)).toBeTruthy()
    expect(id.diferente(id)).toBeFalsy()
  })

  test("Deve comparar dois ids diferentes", () => {
    const id1 = new Id(Id.novo.valor)
    const id2 = new Id()

    expect(id1.igual(id2)).toBeFalsy()
    expect(id1.igual(id2)).toBeFalsy()
  })

  
})
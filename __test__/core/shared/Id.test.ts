import { Erros } from "@/core/constants/Erros";
import {Id} from "@/core/shared/Id"


describe("Testar o objeto de valor Id", () => {
  it("Deve criar um id válido", () => {
    const id = Id.novo
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeTruthy()
  })

  it("Deve lançar erro ao criar um id inválido", () => {
    expect(() => new Id("123")).toThrowError(Erros.ID_INVALIDO)
  })

  it("Deve criar um id válido a partir de outro id", () => {
    const id = new Id(Id.novo.valor)
    expect(id.valor).toHaveLength(36)
    expect(id.novo).toBeFalsy()
  })
})
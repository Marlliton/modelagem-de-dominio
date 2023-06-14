import { Id } from "../shared/Id";
import { NomePessoa } from "../shared/NomePessoa";

export class Pessoa {
  readonly _id: Id
  readonly _nome: NomePessoa
  constructor(nome: string, id?: string) {
    this._id = new Id(id)
    this._nome = new NomePessoa(nome)
  }
}


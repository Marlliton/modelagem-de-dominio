import { v4, validate } from "uuid";
import {Erros} from "@/core/constants/Erros"

export class Id {
  readonly novo: boolean
  constructor(readonly valor?: string) {
    this.valor = valor ?? v4()
    this.novo = !valor

    if(!validate(this.valor)) throw new Error(Erros.ID_INVALIDO)
  }

  static get novo() {
    return new Id()
  }
}
import { Erros } from "../constants/Erros";
import {Validador} from "../utils/Validador"

export class NomePessoa {
  constructor(readonly nome: string) {
    this.nome = nome.trim()

    const erros = Validador.combinar(
      Validador.naoVazio(this.nome, Erros.NOME_VAZIO),
      Validador.tamanhoMaiorQue(this.nome, 4, Erros.NOME_PEQUENO),
      Validador.tamanhoMenorQue(this.nome, 121, Erros.NOME_GRANDE),
      Validador.naoVazio(this.nome.split(" ")[1], Erros.NOME_SEM_SOBRENOME),
      Validador.regex(this.nome, /^[a-zA-ZÀ-ú\s]+$/, Erros.NOME_CARACTERES_INVALIDOS)
    )

    if(erros) throw new Error(erros.join(", "))
  }

  get completo(): string {
    return this.nome
  }

  get primeiroNome(): string {
    return this.nome.split(" ")[0]
  }

  get sobrenomes(): string[] {
    return this.nome.split(" ").slice(1)
  }

  get ultimoNome(): string {
    return this.nome.split(" ").pop() as string 
  }
}
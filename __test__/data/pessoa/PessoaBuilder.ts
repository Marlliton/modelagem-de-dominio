import { Pessoa, PessoaProps } from "@/core/pessoa/Pessoa";
import { Id } from "@/core/shared/Id";
import {faker} from "@faker-js/faker"
import {generate as cpf} from "gerador-validador-cpf"

export class PessoaBuilder {
  private constructor(private props: PessoaProps) {}

  static criar() {
    return new PessoaBuilder({
      id: Id.novo.valor,
      nome: faker.person.fullName(),
      cpf: cpf()
    })
  }

  comId(id: string) {
    this.props.id = id
    return this
  }

  semId() {
    this.props.id = undefined
    return this
  }
  
  comNome(nome: string) {
    this.props.nome = nome
    return this
  }

  semNome() {
    this.props.nome = undefined
    return this
  }

  comCpf(cpf: string) {
    this.props.cpf = cpf
    return this
  }

  semCpf() {
    this.props.cpf = undefined
    return this
  }

  agora() {
    return new Pessoa(this.props)
  }
}

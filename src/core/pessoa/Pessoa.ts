import { Cpf } from "../shared/Cpf";
import { Id } from "../shared/Id";
import { NomePessoa } from "../shared/NomePessoa";

interface PessoaProps {
  id?: string;
  nome?: string;
  cpf?: string;
}

export class Pessoa {
  readonly _id: Id;
  readonly _cpf: Cpf;
  readonly _nome: NomePessoa;
  constructor(props: PessoaProps) {
    this._id = new Id(props.id);
    this._nome = new NomePessoa(props.nome);
    this._cpf = new Cpf(props.cpf);
  }
}

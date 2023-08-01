import { Cpf } from "../shared/Cpf";
import { Entidade, EntidadeProps } from "../shared/Entidade";
import { Id } from "../shared/Id";
import { NomePessoa } from "../shared/NomePessoa";

export interface PessoaProps extends EntidadeProps {
  nome?: string;
  cpf?: string;
}

export class Pessoa extends Entidade<Pessoa, PessoaProps>{
  readonly _cpf: Cpf;
  readonly _nome: NomePessoa;
  constructor(props: PessoaProps) {
    super(props)
    this._nome = new NomePessoa(props.nome);
    this._cpf = new Cpf(props.cpf);
  }
}

import RegiaoCpf from "../shared/RegiaoCPF";
import { Pessoa } from "./Pessoa";

export class PessoaPorRegiao {
  constructor(private pessoas: Pessoa[]) {}

  agrupar() {
    return this.pessoas.reduce((map, pessoa) => {
      const regiao = pessoa._cpf.regiao
      const pessoasDaRegiao = map.get(regiao) ?? []
      pessoasDaRegiao.push(pessoa)
      map.set(regiao, pessoasDaRegiao)

      return map
    }, new Map<RegiaoCpf, Pessoa[]>())
  }
}
import { Id } from "./Id";

export interface EntidadeProps {
  id?: string;
}

export abstract class Entidade<T, P extends EntidadeProps> {
  readonly _id: Id;
  readonly props
  constructor(props: P) {
    this._id = new Id(props.id);
    this.props = {...props, id: this._id.valor}
  }

  igual(entidade: Entidade<T, P>) {
    return this._id.igual(entidade?._id);
  }
  
  diferente(entidade: Entidade<T, P>) {
    return this._id.diferente(entidade?._id);
  }

  clone(novasProps: P): T {
    return new (this.constructor as new (props: P) => T)({...this.props, ...novasProps});
  }
}

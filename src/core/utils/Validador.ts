export class Validador {

  static combinar(...erros: (string | null)[]): string[] | null {
    const errosEncontrados = erros.filter(Boolean) as string[]
    if(!!errosEncontrados.length) return errosEncontrados
    return null
  }

  static naoNulo(valor: any, erro: string): string | null {
    return valor !== undefined && valor !== null ? null : erro
  }

  static naoVazio(valor: string | null | undefined, erro: string): string | null {
    if(Validador.naoNulo(valor, erro)) return erro

    return valor!.trim() !== "" ? null : erro 
  }

  static tamanhoMenorQue(valor: string | any[], tamanhoMax: number, erro: string): string | null {
    return valor.length < tamanhoMax ? null : erro
  }

  static tamanhoMaiorQue(valor: string | any[], tamanhoMin: number, erro: string): string | null {
    return valor.length > tamanhoMin ? null : erro
  }

  static regex(valor: string, regex: RegExp, erro: string): string | null {
    return regex.test(valor) ? null : erro
  }

  static emailValido(email: string): boolean {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email)  
  }
}
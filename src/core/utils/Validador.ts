export class Validador {

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

  static emailValido(email: string): boolean {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email)  
  }
}
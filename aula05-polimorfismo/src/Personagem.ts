import { Util } from "./util/Util";

// Personagem vira uma classe abstrata 
// Uma clase abstrata não pode ser instanciada 
export abstract class Personagem {
  protected _nome: string;
  protected _armadura: number;
  protected _vidaMaxima: number;
  protected _vidaAtual: number;

  constructor(nome: string) {
    this._nome = nome;
    this._armadura = Util.randomizar(100, 1_000);
    this._vidaMaxima = Util.randomizar(100, 1_000);
    this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
  }

  // Métodos abstratos são métodos que possuem somente assinatura sem ter uma implementação
  public abstract atacar(): string;

  public abstract defender(atacante: Personagem): number;
}

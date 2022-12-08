import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        // super é necessário quando for utilizar o contrutor da super classe
        // sempre referenciar os parâmetros da superclasse pelo super
        super(nome);
        // Atributos são sobrescritos. Em Personagem são criados mas aqui são sobrescritos
        this._armadura = Util.randomizar(1_000, 10_000);
        this._vidaMaxima = Util.randomizar(200, 10_000);
        this._vidaAtual = Util.randomizar(20, this._vidaMaxima);
        this._vidaAtual = 100;
        this._forca = Util.randomizar(100, 1_000);
        this._agilidade = Util.randomizar(100, 1_000);
    }
}

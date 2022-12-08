export class Util {
    // Método estático não necessita instanciar a classe para ser inicializado
    // Recomendadao somente para métodos utilitários
    public static randomizar(inicio: number, fim: number): number {
        return inicio + Math.random() * (fim - inicio);
    }
}

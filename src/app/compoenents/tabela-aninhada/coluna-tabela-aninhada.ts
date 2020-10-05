

export interface ColunaTabelaAninhada {
  cabecalho: string;
  extrairConteudoDaLinha: (linha: any) => string;
}

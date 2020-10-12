

export interface ColunaTabelaAninhada {
  cabecalho: string;
  extrairConteudoDaLinha: (linha: any) => string;
  classeCss?: string;
}

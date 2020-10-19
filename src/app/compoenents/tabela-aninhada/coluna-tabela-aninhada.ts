import { TemplateRef } from '@angular/core';

export interface ColunaTabelaAninhada {
  cabecalho: string;
  classeCssCabecalho?: string;
  extrairConteudoDaLinha: TemplateRef<any> | ((linha:any) => string);
  classeCss?: string;
}

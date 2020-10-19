import { TemplateRef } from '@angular/core';

export interface ColunaTabelaAninhada {
  cabecalho: string;
  extrairConteudoDaLinha: TemplateRef<any> | ((linha:any) => string);
  classeCss?: string;
}

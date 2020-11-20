import { TemplateRef } from '@angular/core';

export interface ColunaTabelaAninhada {

  /**
   * Texto que aparece no cabeçalho da coluna
   */
  cabecalho: string;

  /**
   * CSS para estilização do cabeçalho da coluna
   */
  classeCssCabecalho?: string;

  /**
   * Conteúdo da célula para essa coluna dado uma linha.
   * Pode informar uma `função` que recebe a linha e retorna o conteúdo da linha
   * para essa coluna ou pode informar um `TemplateRef` que recebe a linha como contexto
   *
   *
   * @example
   * ```js
   * (linha) => linha.propriedadeDaLinha
   * ```
   * ou
   * ```html
   * <ng-template #colunaDeAcao let-linha="linha" >
   * <button (click)="mostrarDetalhes(linha)" >Detalhes</button>
   * </ng-template>
   * ```
   *
   */
  conteudoDaCelula: TemplateRef<any> | ((linha:any) => string);

  /**
   * CSS para estilização da coluna
   */
  classeCss?: string;
}

import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ColunaTabelaAninhada } from '../coluna-tabela-aninhada';

@Component({
  selector: 'linha-tabela-aninhada',
  templateUrl: './linha-tabela-aninhada.component.html',
  styleUrls: ['./linha-tabela-aninhada.component.scss']
})
export class LinhaTabelaAninhadaComponent implements OnInit {

  @ViewChild('conteudoDaLinha', {static: true})
  conteudoDaLinha: TemplateRef<any>;

  /**
   * Inoforme o objeto que representa a linha da tabela
   */
  @Input()
  linha: any;

  /**
   * Informe as colunas da tabela
   */
  @Input()
  colunas: ColunaTabelaAninhada[] = [];

  /**
   * Informe a função para extrair, de cada linha, as linhas filhas.
   */
  @Input()
  extratorDeFilhos: (linha: any) => any[] = (_:any) => null;

  /**
   * Informe a função para extrair, de cada linha, a classe de css customizada
   */
  @Input()
  extratorDeClasseCss: (nivel) => string;

  /**
   * Esse input vai ser chamado recursivamente para definir o nível de cada linha
   */
  @Input()
  nivel = 0;

  filhos: any[] = [];

  /**
   * Define se a linha está expandida ou retraída.
   */
  expandido = false;

  /**
   * Armazena a classe CSS da linha.
   */
  classeCss = '';

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.conteudoDaLinha);

    this.extrairFilhos();
    this.extrairClasseCss();
  }

  private extrairFilhos() {
    if(this.extrairFilhos) {
      this.filhos = this.extratorDeFilhos(this.linha);
    }
  }

  private extrairClasseCss() {
    if(this.extratorDeClasseCss) {
      this.classeCss = this.extratorDeClasseCss(this.nivel);
    }
  }

}

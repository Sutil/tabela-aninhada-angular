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

  expandido = false;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.conteudoDaLinha);
  }

}

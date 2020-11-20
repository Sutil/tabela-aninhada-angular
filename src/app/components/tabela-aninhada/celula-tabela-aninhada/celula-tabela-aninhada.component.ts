import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ColunaTabelaAninhada } from '../coluna-tabela-aninhada';

@Component({
  selector: 'celula-tabela-aninhada',
  templateUrl: './celula-tabela-aninhada.component.html',
  styleUrls: ['./celula-tabela-aninhada.component.scss']
})
export class CelulaTabelaAninhadaComponent implements OnInit {

  @ViewChild('conteudoDaColuna', {static: true})
  conteudoDaColuna: TemplateRef<any>;

  @Input()
  linha: any;

  @Input()
  coluna: ColunaTabelaAninhada;

  customizada = false;

  conteudoPadrao: string;
  conteudoCustomizado: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.conteudoDaColuna);
    this.extrairConteudo();
  }

  private extrairConteudo() {
    const tipo = (typeof this.coluna.conteudoDaCelula);
    if(tipo === 'function') {
      const extrator = <(a: any) => string>this.coluna.conteudoDaCelula;
      this.conteudoPadrao = extrator(this.linha);
    } else {
      this.customizada = true;
      this.conteudoCustomizado = <TemplateRef<any>>this.coluna.conteudoDaCelula;
    }
  }

}

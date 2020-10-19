import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ColunaTabelaAninhada } from '../coluna-tabela-aninhada';

@Component({
  selector: 'coluna-tabela-aninhada',
  templateUrl: './coluna-tabela-aninhada.component.html',
  styleUrls: ['./coluna-tabela-aninhada.component.scss']
})
export class ColunaTabelaAninhadaComponent implements OnInit {

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
    console.log(this.linha);
  }

  private extrairConteudo() {
    const tipo = (typeof this.coluna.extrairConteudoDaLinha);
    if(tipo === 'function') {
      const extrator = <(a: any) => string>this.coluna.extrairConteudoDaLinha;
      this.conteudoPadrao = extrator(this.linha);
    } else {
      this.customizada = true;
      this.conteudoCustomizado = <TemplateRef<any>>this.coluna.extrairConteudoDaLinha;
    }
  }

}

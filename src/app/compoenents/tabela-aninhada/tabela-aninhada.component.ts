import { Component, Input, OnInit } from '@angular/core';
import { ColunaTabelaAninhada } from './coluna-tabela-aninhada';

@Component({
  selector: 'tabela-aninhada',
  templateUrl: './tabela-aninhada.component.html',
  styleUrls: ['./tabela-aninhada.component.scss']
})
export class TabelaAninhadaComponent implements OnInit {


  /**
   * Informe as colunas da sua tabelas
   */
  @Input()
  colunas: ColunaTabelaAninhada[] = [];

  /**
   * Informe o array de dados da sua tabela, onde cada elemento será um linhas da tabela
   */
  @Input()
  linhas: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

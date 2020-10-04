import { Component, OnInit } from '@angular/core';
import { ColunaTabelaAninhada } from '../tabela-aninhada/coluna-tabela-aninhada';

@Component({
  selector: 'relatorio-de-vendas',
  templateUrl: './relatorio-de-vendas.component.html',
  styleUrls: ['./relatorio-de-vendas.component.scss']
})
export class RelatorioDeVendasComponent implements OnInit {

  colunas: ColunaTabelaAninhada[] = [
    {
      cabecalho: 'Setor ou produto'
    },
    {
      cabecalho: 'janeiro',
    },
    {
      cabecalho: 'fevereiro',
    },
    {
      cabecalho: 'março'
    },
    {
      cabecalho: 'abril',
    },
    {
      cabecalho: 'maio',
    },
    {
      cabecalho: 'junho'
    },
    {
      cabecalho: 'agosto',
    },
    {
      cabecalho: 'setembro',
    },
    {
      cabecalho: 'outubro',
    },
    {
      cabecalho: 'novembro',
    },
    {
      cabecalho: 'dezembro',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

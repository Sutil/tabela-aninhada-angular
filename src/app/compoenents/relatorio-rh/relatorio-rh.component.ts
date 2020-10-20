import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColunaTabelaAninhada } from '../tabela-aninhada/coluna-tabela-aninhada';
import { folhaPagamento } from './db-rh';

@Component({
  selector: 'relatorio-rh',
  templateUrl: './relatorio-rh.component.html',
  styleUrls: ['./relatorio-rh.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RelatorioRhComponent implements OnInit {

  colunas: ColunaTabelaAninhada[] = [
    {
      cabecalho: 'Setor/Funcionário',
      extrairConteudoDaLinha: (linha) => linha.nome,
    },
    {
      cabecalho: 'Janeiro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[0].valor,
    },
    {
      cabecalho: 'Fevereiro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[1].valor,
    },
    {
      cabecalho: 'Março',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[2].valor,
    },
    {
      cabecalho: 'Abril',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[3].valor,
    },
    {
      cabecalho: 'Maio',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[4].valor,
    },
    {
      cabecalho: 'Junho',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[5].valor,
    },
    {
      cabecalho: 'Julho',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[6].valor,
    },
    {
      cabecalho: 'Agosto',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[7].valor,
    },
    {
      cabecalho: 'Setembro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[8].valor,
    },
    {
      cabecalho: 'Outubro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[9].valor,
    },
    {
      cabecalho: 'Novembro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[10].valor,
    },
    {
      cabecalho: 'Dezembro',
      extrairConteudoDaLinha: (linha) => linha.folhaPagamento[11].valor,
    },
  ];

  linhas = folhaPagamento;

  constructor() { }

  ngOnInit(): void {
  }

  extratorDeLinhasFilhas(linha) {
    return linha.funcionarios;
  }

  extratorDeCssClassCustomizadaParaLinha(nivel) {
    if(nivel === 0) {
      return 'setor';
    }
    return 'funcionario';
  }

}

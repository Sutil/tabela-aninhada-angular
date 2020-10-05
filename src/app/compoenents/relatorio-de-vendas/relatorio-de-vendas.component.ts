import { Component, OnInit } from '@angular/core';
import { ColunaTabelaAninhada } from '../tabela-aninhada/coluna-tabela-aninhada';
import { vendas } from './db-vendas';

const nomesDosMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];
@Component({
  selector: 'relatorio-de-vendas',
  templateUrl: './relatorio-de-vendas.component.html',
  styleUrls: ['./relatorio-de-vendas.component.scss']
})
export class RelatorioDeVendasComponent implements OnInit {

  colunas: ColunaTabelaAninhada[] = [];

  linhas = vendas;

  constructor() { }

  ngOnInit(): void {
    this.montaColunas();
  }

  private montaColunas() {
    this.montaColunaNome();
    this.monstaColunasDeMeses();
  }

  private montaColunaNome() {
    const coluna: ColunaTabelaAninhada = {
      cabecalho: 'Setor/produto',
      extrairConteudoDaLinha: (linha) => linha.nome,
    }
    this.colunas.push(coluna);
  }

  private monstaColunasDeMeses() {
    const colunasDeMeses = nomesDosMeses.map((mes, indice) => {
      const coluna: ColunaTabelaAninhada = {
        cabecalho: mes,
        extrairConteudoDaLinha: (linha) => this.vendaNoMes(linha, indice + 1),
      }
      return coluna;
    });

    this.colunas.push(...colunasDeMeses);
  }

  private vendaNoMes(linha, mes) {
    console.log(linha)
    const venda = linha.vendas.find(venda => venda.mes === mes);
    return Number(venda.valor).toFixed(2);
  }

}

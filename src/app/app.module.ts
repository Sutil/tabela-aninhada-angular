import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RelatorioDeVendasComponent } from './components/relatorio-de-vendas/relatorio-de-vendas.component';
import { TabelaAninhadaComponent } from './components/tabela-aninhada/tabela-aninhada.component';
import { LinhaTabelaAninhadaComponent } from './components/tabela-aninhada/linha-tabela-aninhada/linha-tabela-aninhada.component';
import { CelulaTabelaAninhadaComponent } from './components/tabela-aninhada/celula-tabela-aninhada/celula-tabela-aninhada.component';
import { RelatorioRhComponent } from './components/relatorio-rh/relatorio-rh.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioDeVendasComponent,
    TabelaAninhadaComponent,
    LinhaTabelaAninhadaComponent,
    CelulaTabelaAninhadaComponent,
    RelatorioRhComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

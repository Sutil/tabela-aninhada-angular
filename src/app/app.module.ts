import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RelatorioDeVendasComponent } from './compoenents/relatorio-de-vendas/relatorio-de-vendas.component';
import { TabelaAninhadaComponent } from './compoenents/tabela-aninhada/tabela-aninhada.component';
import { LinhaTabelaAninhadaComponent } from './compoenents/tabela-aninhada/linha-tabela-aninhada/linha-tabela-aninhada.component';
import { ColunaTabelaAninhadaComponent } from './compoenents/tabela-aninhada/coluna-tabela-aninhada/coluna-tabela-aninhada.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioDeVendasComponent,
    TabelaAninhadaComponent,
    LinhaTabelaAninhadaComponent,
    ColunaTabelaAninhadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

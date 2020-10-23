import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeVendasComponent } from './relatorio-de-vendas.component';

describe('RelatorioDeVendasComponent', () => {
  let component: RelatorioDeVendasComponent;
  let fixture: ComponentFixture<RelatorioDeVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDeVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioDeVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

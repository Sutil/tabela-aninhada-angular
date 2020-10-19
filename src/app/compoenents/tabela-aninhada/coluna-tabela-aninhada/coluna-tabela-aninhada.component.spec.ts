import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaTabelaAninhadaComponent } from './coluna-tabela-aninhada.component';

describe('ColunaTabelaAninhadaComponent', () => {
  let component: ColunaTabelaAninhadaComponent;
  let fixture: ComponentFixture<ColunaTabelaAninhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunaTabelaAninhadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColunaTabelaAninhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

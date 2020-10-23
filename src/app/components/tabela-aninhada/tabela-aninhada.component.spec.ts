import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAninhadaComponent } from './tabela-aninhada.component';

describe('TabelaAninhadaComponent', () => {
  let component: TabelaAninhadaComponent;
  let fixture: ComponentFixture<TabelaAninhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAninhadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaAninhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

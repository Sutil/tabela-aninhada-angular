import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaTabelaAninhadaComponent } from './linha-tabela-aninhada.component';

describe('LinhaTabelaAninhadaComponent', () => {
  let component: LinhaTabelaAninhadaComponent;
  let fixture: ComponentFixture<LinhaTabelaAninhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaTabelaAninhadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaTabelaAninhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

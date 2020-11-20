import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioRhComponent } from './relatorio-rh.component';

describe('RelatorioRhComponent', () => {
  let component: RelatorioRhComponent;
  let fixture: ComponentFixture<RelatorioRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

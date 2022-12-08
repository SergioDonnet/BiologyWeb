import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversidadComponent } from './diversidad.component';

describe('DiversidadComponent', () => {
  let component: DiversidadComponent;
  let fixture: ComponentFixture<DiversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaUnoComponent } from './prueba-uno.component';

describe('PruebaUnoComponent', () => {
  let component: PruebaUnoComponent;
  let fixture: ComponentFixture<PruebaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

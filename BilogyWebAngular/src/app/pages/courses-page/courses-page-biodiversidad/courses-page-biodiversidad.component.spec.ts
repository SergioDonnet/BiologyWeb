import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageBiodiversidadComponent } from './courses-page-biodiversidad.component';

describe('CoursesPageBiodiversidadComponent', () => {
  let component: CoursesPageBiodiversidadComponent;
  let fixture: ComponentFixture<CoursesPageBiodiversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageBiodiversidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageBiodiversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

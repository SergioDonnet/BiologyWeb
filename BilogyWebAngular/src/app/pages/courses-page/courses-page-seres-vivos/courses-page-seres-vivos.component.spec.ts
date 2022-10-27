import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageSeresVivosComponent } from './courses-page-seres-vivos.component';

describe('CoursesPageSeresVivosComponent', () => {
  let component: CoursesPageSeresVivosComponent;
  let fixture: ComponentFixture<CoursesPageSeresVivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageSeresVivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageSeresVivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

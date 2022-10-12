import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesButtonComponent } from './courses-button.component';

describe('CoursesButtonComponent', () => {
  let component: CoursesButtonComponent;
  let fixture: ComponentFixture<CoursesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

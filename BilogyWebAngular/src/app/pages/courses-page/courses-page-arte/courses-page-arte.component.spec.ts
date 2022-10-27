import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageArteComponent } from './courses-page-arte.component';

describe('CoursesPageArteComponent', () => {
  let component: CoursesPageArteComponent;
  let fixture: ComponentFixture<CoursesPageArteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageArteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

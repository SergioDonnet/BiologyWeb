import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3lesson4page3Component } from './course3lesson4page3.component';

describe('Course3lesson4page3Component', () => {
  let component: Course3lesson4page3Component;
  let fixture: ComponentFixture<Course3lesson4page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3lesson4page3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course3lesson4page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

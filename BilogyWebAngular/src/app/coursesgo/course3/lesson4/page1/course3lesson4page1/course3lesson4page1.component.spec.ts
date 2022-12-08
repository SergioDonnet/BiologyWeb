import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3lesson4page1Component } from './course3lesson4page1.component';

describe('Course3lesson4page1Component', () => {
  let component: Course3lesson4page1Component;
  let fixture: ComponentFixture<Course3lesson4page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3lesson4page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course3lesson4page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

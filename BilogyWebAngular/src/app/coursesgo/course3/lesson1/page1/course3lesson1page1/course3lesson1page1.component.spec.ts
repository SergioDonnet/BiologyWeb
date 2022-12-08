import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3lesson1page1Component } from './course3lesson1page1.component';

describe('Course3lesson1page1Component', () => {
  let component: Course3lesson1page1Component;
  let fixture: ComponentFixture<Course3lesson1page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3lesson1page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course3lesson1page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

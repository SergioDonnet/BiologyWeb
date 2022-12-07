import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson5page1Component } from './course1lesson5page1.component';

describe('Course1lesson5page1Component', () => {
  let component: Course1lesson5page1Component;
  let fixture: ComponentFixture<Course1lesson5page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson5page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson5page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson2page3Component } from './course1lesson2page3.component';

describe('Course1lesson2page3Component', () => {
  let component: Course1lesson2page3Component;
  let fixture: ComponentFixture<Course1lesson2page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson2page3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson2page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

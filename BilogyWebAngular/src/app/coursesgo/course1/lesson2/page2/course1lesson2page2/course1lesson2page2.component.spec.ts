import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson2page2Component } from './course1lesson2page2.component';

describe('Course1lesson2page2Component', () => {
  let component: Course1lesson2page2Component;
  let fixture: ComponentFixture<Course1lesson2page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson2page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson2page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

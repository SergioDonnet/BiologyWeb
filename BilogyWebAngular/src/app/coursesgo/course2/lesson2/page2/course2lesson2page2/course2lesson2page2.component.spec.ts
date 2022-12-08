import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson2page2Component } from './course2lesson2page2.component';

describe('Course2lesson2page2Component', () => {
  let component: Course2lesson2page2Component;
  let fixture: ComponentFixture<Course2lesson2page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson2page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson2page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson1page3Component } from './course2lesson1page3.component';

describe('Course2lesson1page3Component', () => {
  let component: Course2lesson1page3Component;
  let fixture: ComponentFixture<Course2lesson1page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson1page3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson1page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

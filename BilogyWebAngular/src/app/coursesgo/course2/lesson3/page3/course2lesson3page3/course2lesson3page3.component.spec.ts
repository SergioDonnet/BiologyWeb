import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson3page3Component } from './course2lesson3page3.component';

describe('Course2lesson3page3Component', () => {
  let component: Course2lesson3page3Component;
  let fixture: ComponentFixture<Course2lesson3page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson3page3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson3page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

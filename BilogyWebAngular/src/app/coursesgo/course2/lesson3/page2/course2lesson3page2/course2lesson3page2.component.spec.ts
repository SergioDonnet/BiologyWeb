import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson3page2Component } from './course2lesson3page2.component';

describe('Course2lesson3page2Component', () => {
  let component: Course2lesson3page2Component;
  let fixture: ComponentFixture<Course2lesson3page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson3page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson3page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

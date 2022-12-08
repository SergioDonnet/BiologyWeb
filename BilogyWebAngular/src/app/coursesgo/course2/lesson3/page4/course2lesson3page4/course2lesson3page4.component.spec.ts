import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson3page4Component } from './course2lesson3page4.component';

describe('Course2lesson3page4Component', () => {
  let component: Course2lesson3page4Component;
  let fixture: ComponentFixture<Course2lesson3page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson3page4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson3page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

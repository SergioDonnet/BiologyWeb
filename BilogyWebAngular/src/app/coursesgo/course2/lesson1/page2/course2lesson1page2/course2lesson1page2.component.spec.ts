import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson1page2Component } from './course2lesson1page2.component';

describe('Course2lesson1page2Component', () => {
  let component: Course2lesson1page2Component;
  let fixture: ComponentFixture<Course2lesson1page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson1page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

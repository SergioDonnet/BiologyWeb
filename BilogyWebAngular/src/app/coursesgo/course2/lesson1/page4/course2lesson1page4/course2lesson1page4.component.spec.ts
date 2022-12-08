import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson1page4Component } from './course2lesson1page4.component';

describe('Course2lesson1page4Component', () => {
  let component: Course2lesson1page4Component;
  let fixture: ComponentFixture<Course2lesson1page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson1page4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson1page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

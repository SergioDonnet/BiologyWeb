import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson1page1Component } from './course2lesson1page1.component';

describe('Course2lesson1page1Component', () => {
  let component: Course2lesson1page1Component;
  let fixture: ComponentFixture<Course2lesson1page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson1page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson1page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

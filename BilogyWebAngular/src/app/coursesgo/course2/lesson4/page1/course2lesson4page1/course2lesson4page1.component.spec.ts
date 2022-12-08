import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson4page1Component } from './course2lesson4page1.component';

describe('Course2lesson4page1Component', () => {
  let component: Course2lesson4page1Component;
  let fixture: ComponentFixture<Course2lesson4page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson4page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson4page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

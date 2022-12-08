import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson4page2Component } from './course2lesson4page2.component';

describe('Course2lesson4page2Component', () => {
  let component: Course2lesson4page2Component;
  let fixture: ComponentFixture<Course2lesson4page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson4page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson4page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

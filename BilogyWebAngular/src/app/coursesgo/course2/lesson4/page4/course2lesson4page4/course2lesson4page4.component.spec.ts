import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson4page4Component } from './course2lesson4page4.component';

describe('Course2lesson4page4Component', () => {
  let component: Course2lesson4page4Component;
  let fixture: ComponentFixture<Course2lesson4page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson4page4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson4page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

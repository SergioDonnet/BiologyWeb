import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course2lesson2page5Component } from './course2lesson2page5.component';

describe('Course2lesson2page5Component', () => {
  let component: Course2lesson2page5Component;
  let fixture: ComponentFixture<Course2lesson2page5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course2lesson2page5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course2lesson2page5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

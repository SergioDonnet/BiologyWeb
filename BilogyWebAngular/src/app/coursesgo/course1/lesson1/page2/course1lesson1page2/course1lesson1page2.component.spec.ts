import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson1page2Component } from './course1lesson1page2.component';

describe('Course1lesson1page2Component', () => {
  let component: Course1lesson1page2Component;
  let fixture: ComponentFixture<Course1lesson1page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson1page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson1page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

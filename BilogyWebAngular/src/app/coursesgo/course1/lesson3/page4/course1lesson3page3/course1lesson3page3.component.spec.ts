import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson3page3Component } from './course1lesson3page3.component';

describe('Course1lesson3page3Component', () => {
  let component: Course1lesson3page3Component;
  let fixture: ComponentFixture<Course1lesson3page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson3page3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson3page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

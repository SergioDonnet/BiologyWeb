import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson3page1Component } from './course1lesson3page1.component';

describe('Course1lesson3page1Component', () => {
  let component: Course1lesson3page1Component;
  let fixture: ComponentFixture<Course1lesson3page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson3page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson3page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

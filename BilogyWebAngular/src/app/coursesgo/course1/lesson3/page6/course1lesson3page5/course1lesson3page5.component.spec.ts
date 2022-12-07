import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson3page5Component } from './course1lesson3page5.component';

describe('Course1lesson3page5Component', () => {
  let component: Course1lesson3page5Component;
  let fixture: ComponentFixture<Course1lesson3page5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson3page5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson3page5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

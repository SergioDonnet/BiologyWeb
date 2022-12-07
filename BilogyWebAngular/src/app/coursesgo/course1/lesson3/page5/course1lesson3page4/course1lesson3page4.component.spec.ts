import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson3page4Component } from './course1lesson3page4.component';

describe('Course1lesson3page4Component', () => {
  let component: Course1lesson3page4Component;
  let fixture: ComponentFixture<Course1lesson3page4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson3page4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson3page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

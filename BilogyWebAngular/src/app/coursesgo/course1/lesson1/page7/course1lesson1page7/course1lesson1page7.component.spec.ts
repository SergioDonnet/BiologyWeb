import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson1page7Component } from './course1lesson1page7.component';

describe('Course1lesson1page7Component', () => {
  let component: Course1lesson1page7Component;
  let fixture: ComponentFixture<Course1lesson1page7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson1page7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson1page7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
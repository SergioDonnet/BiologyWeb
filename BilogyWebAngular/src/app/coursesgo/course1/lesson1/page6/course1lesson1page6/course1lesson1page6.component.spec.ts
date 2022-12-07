import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson1page6Component } from './course1lesson1page6.component';

describe('Course1lesson1page6Component', () => {
  let component: Course1lesson1page6Component;
  let fixture: ComponentFixture<Course1lesson1page6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson1page6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson1page6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

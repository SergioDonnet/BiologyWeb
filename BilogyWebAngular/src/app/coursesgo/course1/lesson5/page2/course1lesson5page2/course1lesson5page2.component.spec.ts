import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course1lesson5page2Component } from './course1lesson5page2.component';

describe('Course1lesson5page2Component', () => {
  let component: Course1lesson5page2Component;
  let fixture: ComponentFixture<Course1lesson5page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course1lesson5page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course1lesson5page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

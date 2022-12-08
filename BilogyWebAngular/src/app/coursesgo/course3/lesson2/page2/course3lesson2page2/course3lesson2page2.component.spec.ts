import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3lesson2page2Component } from './course3lesson2page2.component';

describe('Course3lesson2page2Component', () => {
  let component: Course3lesson2page2Component;
  let fixture: ComponentFixture<Course3lesson2page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3lesson2page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course3lesson2page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

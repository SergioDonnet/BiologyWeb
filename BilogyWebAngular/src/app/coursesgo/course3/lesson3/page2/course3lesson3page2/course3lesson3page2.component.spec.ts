import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course3lesson3page2Component } from './course3lesson3page2.component';

describe('Course3lesson3page2Component', () => {
  let component: Course3lesson3page2Component;
  let fixture: ComponentFixture<Course3lesson3page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course3lesson3page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Course3lesson3page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

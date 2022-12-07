import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses1lesson3page2Component } from './courses1lesson3page2.component';

describe('Courses1lesson3page2Component', () => {
  let component: Courses1lesson3page2Component;
  let fixture: ComponentFixture<Courses1lesson3page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courses1lesson3page2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courses1lesson3page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

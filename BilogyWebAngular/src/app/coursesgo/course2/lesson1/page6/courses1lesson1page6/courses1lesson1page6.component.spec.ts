import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses1lesson1page6Component } from './courses1lesson1page6.component';

describe('Courses1lesson1page6Component', () => {
  let component: Courses1lesson1page6Component;
  let fixture: ComponentFixture<Courses1lesson1page6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courses1lesson1page6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courses1lesson1page6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

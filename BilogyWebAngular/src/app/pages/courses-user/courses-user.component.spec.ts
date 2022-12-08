import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUserComponent } from './courses-user.component';

describe('CoursesUserComponent', () => {
  let component: CoursesUserComponent;
  let fixture: ComponentFixture<CoursesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

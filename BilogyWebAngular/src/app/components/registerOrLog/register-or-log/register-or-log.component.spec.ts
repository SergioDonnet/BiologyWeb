import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrLogComponent } from './register-or-log.component';

describe('RegisterOrLogComponent', () => {
  let component: RegisterOrLogComponent;
  let fixture: ComponentFixture<RegisterOrLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterOrLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOrLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

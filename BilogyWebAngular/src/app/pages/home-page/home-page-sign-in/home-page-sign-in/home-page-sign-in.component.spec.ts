import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSignInComponent } from './home-page-sign-in.component';

describe('HomePageSignInComponent', () => {
  let component: HomePageSignInComponent;
  let fixture: ComponentFixture<HomePageSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

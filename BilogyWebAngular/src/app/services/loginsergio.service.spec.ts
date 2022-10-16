import { TestBed } from '@angular/core/testing';

import { LoginSergioService } from './loginsergio.service';

describe('LoginSergioService', () => {
  let service: LoginSergioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSergioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

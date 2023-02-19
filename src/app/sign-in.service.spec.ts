/*
============================================
; Title: sign-in.service.spec.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: sign-in.service.spec.ts
============================================
*/

// import statements
import { TestBed } from '@angular/core/testing';
import { SignInService } from './sign-in.service';

// description and declaration of variables
describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

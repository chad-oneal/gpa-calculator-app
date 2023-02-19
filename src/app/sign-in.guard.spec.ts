/*
============================================
; Title: sign-in.guard.spec.ts
; Author: Chad ONeal
; Date: 02/17/2023
; Description: sign-in.guard.spec.ts
============================================
*/

// import statements
import { TestBed } from '@angular/core/testing';
import { SignInGuard } from './sign-in.guard';

// description and declaration of variables
describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

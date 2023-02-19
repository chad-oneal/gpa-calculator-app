/*
============================================
; Title: sign-in.service.ts
; Author: Chad ONeal
; Date: 02/17/2023
; Description: sign-in.service.ts
============================================
*/

// import statement
import { Injectable } from '@angular/core';

// injectable
@Injectable({
  providedIn: 'root'
})

// export statement
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}

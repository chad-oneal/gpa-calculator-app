/*
============================================
; Title: not-found.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css & html files to use
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

// export statement
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

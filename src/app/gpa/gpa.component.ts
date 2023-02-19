/*
============================================
; Title: wishlist.component.spec.ts
; Author: Chad ONeal
; Date: 02/08/2023
; Description: wishlist.component.spec.ts
============================================
*/

// import statement
import { Component, OnInit, Input } from '@angular/core';

// tells which css & html files to use
@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

// export statement
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}

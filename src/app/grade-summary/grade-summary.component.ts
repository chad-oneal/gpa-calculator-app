/*
============================================
; Title: grade-summary.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: grade-summary.component.ts
============================================
*/

// import statement
import { Component, OnInit, Input } from '@angular/core';

// tells which css & html files to use
@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})

// export statement
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}

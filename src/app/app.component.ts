/*
============================================
; Title: app.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/

// import statement
import { Component } from '@angular/core';

// tells which css & html files to use
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export statement
export class AppComponent {
  title = 'gpa-calculator-app1';
}

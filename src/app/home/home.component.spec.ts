/*
============================================
; Title: home.component.spec.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/

// import statements
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

// descriptions and declarations of variables
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

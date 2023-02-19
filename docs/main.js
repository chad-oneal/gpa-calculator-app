(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chado\Documents\Web-425\web-425\week-7\exercise-7.3-form-validation\gpa-calculator-app\src\main.ts */"zUnb");


/***/ }),

/***/ "89dL":
/*!******************************************************!*\
  !*** ./src/app/auth-layout/auth-layout.component.ts ***!
  \******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
============================================
, Title: auth-layout.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: auth-layout.component.ts
+===========================================
*/
// import statement



// tells which css and html files to use
// export statement
class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DIiwiZmlsZSI6InNyYy9hcHAvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IGF1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG47IEF1dGhvcjogQ2hhZCBPTmVhbFxyXG47IERhdGU6IDAyLzA5LzIwMjNcclxuOyBEZXNjcmlwdGlvbjogYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-layout',
                templateUrl: './auth-layout.component.html',
                styleUrls: ['./auth-layout.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _gpa_gpa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gpa/gpa.component */ "fwsa");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _grade_summary_grade_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../grade-summary/grade-summary.component */ "MVhZ");
/*
============================================
; Title: home.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/
// import statement














function HomeComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grade_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", grade_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", grade_r2, " ");
} }
function HomeComponent_app_grade_summary_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grade-summary", 17);
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("course", entry_r3.course)("grade", entry_r3.grade);
} }
// tells which css and html files to use
// export statement
class HomeComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectableGrades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
        this.transcriptEntries = [];
        this.gpaTotal = 0;
    }
    ;
    ngOnInit() {
        this.transcriptForm = this.fb.group({
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get form() { return this.transcriptForm.controls; }
    // submit function
    onSubmit(event) {
        this.transcriptEntries.push({
            course: this.form.course.value,
            grade: this.form.grade.value
        });
        event.currentTarget.reset();
    }
    // calculates gpa results
    calculateResults() {
        let gpa = 0;
        for (let entry of this.transcriptEntries) {
            console.log(entry.grade);
            switch (entry.grade) {
                case 'A':
                    console.log('its an a');
                    gpa += 4.0;
                    break;
                case 'A-':
                    gpa += 3.7;
                    break;
                case 'B+':
                    gpa += 3.33;
                    break;
                case 'B':
                    gpa += 3.00;
                    break;
                case 'B-':
                    gpa += 2.70;
                    break;
                case 'C+':
                    gpa += 2.30;
                    break;
                case 'C-':
                    gpa += 1.70;
                    break;
                case 'D+':
                    gpa += 1.30;
                    break;
                case 'D':
                    gpa += 1.00;
                    break;
                case 'D-':
                    gpa += 0.70;
                    break;
                default:
                    gpa += 0.00;
                    break;
            }
        }
        // logs gpa to console
        console.log(gpa);
        this.gpaTotal = gpa / this.transcriptEntries.length;
        console.log(this.gpaTotal);
    }
    clearEntries() {
        this.transcriptEntries = [];
        this.gpaTotal = 0;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 5, consts: [["fxLayout", "row wrap", "fxLayoutGap", "20px"], ["fxFlex", "", 1, "grade-form"], [1, "mat-elevation-z8"], ["fxLayout", "column", "fxLayoutGap", "16px", 3, "formGroup", "ngSubmit"], ["fxFlex", "", "appearance", "fill"], ["type", "text", "name", "txtCourse", "required", "", "id", "txtCourse", "matInput", "", "formControlName", "course"], ["formControlName", "grade", "required", "", "name", "selectGrade"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["fxFlex", "", 1, "grade-summary"], ["mat-button", "", "color", "primary", 3, "click"], [3, "course", "grade", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxFlex", "", 1, "gpa"], [2, "text-align", "center"], [3, "gpaTotal"], [3, "value"], [3, "course", "grade"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Grade Entry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_6_listener($event) { ctx.onSubmit($event); return ctx.transcriptForm.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_mat_option_15_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() { return ctx.clearEntries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Clear Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transcript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_app_grade_summary_25_Template, 1, 2, "app-grade-summary", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_30_listener() { return ctx.calculateResults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Calculate GPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " GPA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-gpa", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transcriptForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectableGrades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.transcriptForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transcriptEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gpaTotal", ctx.gpaTotal);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _gpa_gpa_component__WEBPACK_IMPORTED_MODULE_9__["GpaComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _grade_summary_grade_summary_component__WEBPACK_IMPORTED_MODULE_11__["GradeSummaryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogaG9tZS5jb21wb25lbnQuY3NzIGZvciBncGEtY2FsY3VsYXRvci1hcHBcclxuOyBBdXRob3I6IENoYWQgT05lYWxcclxuOyBEYXRlOiAwMi8wOS8yMDIzXHJcbjsgRGVzY3JpcHRpb246IGhvbWUuY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
============================================
; Title: environment.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: environment.ts for gpa-calculator-app
============================================
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export statement
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MVhZ":
/*!**********************************************************!*\
  !*** ./src/app/grade-summary/grade-summary.component.ts ***!
  \**********************************************************/
/*! exports provided: GradeSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeSummaryComponent", function() { return GradeSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/*
============================================
; Title: grade-summary.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: grade-summary.component.ts
============================================
*/
// import statement



// tells which css & html files to use
// export statement
class GradeSummaryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GradeSummaryComponent.ɵfac = function GradeSummaryComponent_Factory(t) { return new (t || GradeSummaryComponent)(); };
GradeSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeSummaryComponent, selectors: [["app-grade-summary"]], inputs: { grade: "grade", course: "course" }, decls: 3, vars: 2, template: function GradeSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.course, " | ", ctx.grade, " ");
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZGUtc3VtbWFyeS9ncmFkZS1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQyIsImZpbGUiOiJzcmMvYXBwL2dyYWRlLXN1bW1hcnkvZ3JhZGUtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogZ3JhZGUtc3VtbWFyeS5jb21wb25lbnQuY3NzIGZvciBncGEtY2FsY3VsYXRvci1hcHBcclxuOyBBdXRob3I6IENoYWQgT05lYWxcclxuOyBEYXRlOiAwMi8wOS8yMDIzXHJcbjsgRGVzY3JpcHRpb246IGdyYWRlLXN1bW1hcnkuY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade-summary',
                templateUrl: './grade-summary.component.html',
                styleUrls: ['./grade-summary.component.css']
            }]
    }], function () { return []; }, { grade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], course: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RZyK":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in.service */ "VgDn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/*
============================================
; Title: sign-in.component.ts
; Author: Chad ONeal
; Date: 02/17/2023
; Description: sign-in.component.ts
============================================
*/
// import statements













function SignInComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
function SignInComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Student ID must be a numeric value. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// tells which css and html files to use
// export statement
class SignInComponent {
    constructor(router, cookieService, fb, signinService) {
        this.router = router;
        this.cookieService = cookieService;
        this.fb = fb;
        this.signinService = signinService;
        console.log(this.cookieService.get('session_user'));
    }
    ngOnInit() {
        this.signinForm = this.fb.group({
            studentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])]
        });
    }
    get form() { return this.signinForm.controls; }
    // submit function
    onSubmit() {
        const formValues = this.signinForm.value;
        const studentId = parseInt(formValues.studentId);
        if (this.signinService.validate(studentId)) {
            this.cookieService.set('session_user', studentId.toString(), 1);
            this.router.navigate(['/']);
        }
        else {
            this.errorMessage = `The student ID you entered is invalid, please try again.`;
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 19, vars: 4, consts: [["fxLayout", "column"], ["fxFlex", "", 1, "mat-elevation-z8", "signin-container"], ["class", "msg-error", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "mat-elevation-z0"], [3, "formGroup", "ngSubmit"], ["fxFlex", "", "appearance", "fill"], ["for", "txtStudentId", "id", "lblStudentId"], ["type", "text", "matInput", "", "formControlName", "studentId", "required", "", "id", "txtStudentId", "name", "txtStudentId"], ["type", "submit", "fxFlex", "", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "msg-error"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Student Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You must enter a valid student ID to proceed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignInComponent_div_7_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInComponent_div_8_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_10_listener() { ctx.onSubmit(); return ctx.signinForm.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Student ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.studentId.errors && ctx.form.studentId.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signinForm.valid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".signin-container[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  margin: 15% auto;\r\n}\r\n\r\n\r\n\r\n.signin-container[_ngcontent-%COMP%]    > mat-card-title[_ngcontent-%COMP%], mat-card-subtitle[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.msg-error[_ngcontent-%COMP%] {\r\n  margin: 10px 0px;\r\n  padding: 12px;\r\n  color: #D8000C;\r\n  background-color: #FFD2D2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQzs7QUFFRDtDQUNDOztBQUNEO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtDQUNDOztBQUNEO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0M7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IHNpZ24taW4uY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbjsgQXV0aG9yOiBDaGFkIE9OZWFsXHJcbjsgRGF0ZTogMDIvMTcvMjAyM1xyXG47IERlc2NyaXB0aW9uOiBzaWduLWluLmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG4vKiBzdHlsZXMgZm9yIGNvbnRhaW5lclxyXG4qL1xyXG4uc2lnbmluLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBtYXJnaW46IDE1JSBhdXRvO1xyXG59XHJcblxyXG4vKiBjZW50ZXJzIHRoZSBtYXQtY2FyZC10aXRsZVxyXG4qL1xyXG4uc2lnbmluLWNvbnRhaW5lciA+IG1hdC1jYXJkLXRpdGxlLCBtYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBlcnJvciBtZXNzYWdlIHN0eWxpbmdcclxuKi9cclxuLm1zZy1lcnJvciB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGNvbG9yOiAjRDgwMDBDO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQyRDI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
============================================
; Title: app.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/
// import statement



// tells which css & html files to use
// export statement
class AppComponent {
    constructor() {
        this.title = 'gpa-calculator-app1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FPQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogYXBwLmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG47IEF1dGhvcjogQ2hhZCBPTmVhbFxyXG47IERhdGU6IDAyLzA5LzIwMjNcclxuOyBEZXNjcmlwdGlvbjogYXBwLmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "VgDn":
/*!************************************!*\
  !*** ./src/app/sign-in.service.ts ***!
  \************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/*
============================================
; Title: sign-in.service.ts
; Author: Chad ONeal
; Date: 02/17/2023
; Description: sign-in.service.ts
============================================
*/
// import statement


// injectable
// export statement
class SignInService {
    constructor() {
        this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
    }
    validate(studentId) {
        return this.studentIds.some(id => id === studentId);
    }
}
SignInService.ɵfac = function SignInService_Factory(t) { return new (t || SignInService)(); };
SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignInService, factory: SignInService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "89dL");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "ty9+");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _gpa_gpa_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gpa/gpa.component */ "fwsa");
/* harmony import */ var _grade_summary_grade_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grade-summary/grade-summary.component */ "MVhZ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/*
============================================
; Title: app.module.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: app.module.ts for in-n-out-books
============================================
*/
// import statements























// module declarations
// export statement
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _gpa_gpa_component__WEBPACK_IMPORTED_MODULE_13__["GpaComponent"],
        _grade_summary_grade_summary_component__WEBPACK_IMPORTED_MODULE_14__["GradeSummaryComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
                    _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _gpa_gpa_component__WEBPACK_IMPORTED_MODULE_13__["GpaComponent"],
                    _grade_summary_grade_summary_component__WEBPACK_IMPORTED_MODULE_14__["GradeSummaryComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_21__["SignInComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "chz9":
/*!**********************************!*\
  !*** ./src/app/sign-in.guard.ts ***!
  \**********************************/
/*! exports provided: SignInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInGuard", function() { return SignInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/*
============================================
; Title: sign-in.guard.ts
; Author: Chad ONeal
; Date: 02/17/2023
; Description: sign-in.guard.ts for gpa calculator app
============================================
*/
// import statements




// injectable
// export statement
class SignInGuard {
    constructor(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    canActivate(next, state) {
        const sessionUser = this.cookieService.get('session_user');
        if (sessionUser) {
            return true;
        }
        else {
            this.router.navigate(['/session/sign-in']);
            return false;
        }
    }
}
SignInGuard.ɵfac = function SignInGuard_Factory(t) { return new (t || SignInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"])); };
SignInGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignInGuard, factory: SignInGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "fwsa":
/*!**************************************!*\
  !*** ./src/app/gpa/gpa.component.ts ***!
  \**************************************/
/*! exports provided: GpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpaComponent", function() { return GpaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/*
============================================
; Title: wishlist.component.spec.ts
; Author: Chad ONeal
; Date: 02/08/2023
; Description: wishlist.component.spec.ts
============================================
*/
// import statement



// tells which css & html files to use
// export statement
class GpaComponent {
    constructor() { }
    ngOnInit() {
    }
}
GpaComponent.ɵfac = function GpaComponent_Factory(t) { return new (t || GpaComponent)(); };
GpaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GpaComponent, selectors: [["app-gpa"]], inputs: { gpaTotal: "gpaTotal" }, decls: 2, vars: 4, template: function GpaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "number");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx.gpaTotal, "1.1-2"), "\n");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3BhL2dwYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0MiLCJmaWxlIjoic3JjL2FwcC9ncGEvZ3BhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG47IFRpdGxlOiBncGEuY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbjsgQXV0aG9yOiBDaGFkIE9OZWFsXHJcbjsgRGF0ZTogMDIvMDkvMjAyM1xyXG47IERlc2NyaXB0aW9uOiBncGEuY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GpaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gpa',
                templateUrl: './gpa.component.html',
                styleUrls: ['./gpa.component.css']
            }]
    }], function () { return []; }, { gpaTotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
============================================
; Title: not-found.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: for gpa-calculator-app
============================================
*/
// import statement




// tells which css & html files to use
// export statement
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 21, vars: 0, consts: [["href", "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap", "rel", "stylesheet"], [1, "main"], [1, "err"], ["src", "./assets/wicked robot 250.png", "height", "100"], [1, "err2"], [1, "msg"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our apologies, the page you are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "looking for can not be found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Let's\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Return home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: rgb(51, 50, 50);\r\n}\r\n\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  background-color: #fcf8f8;\r\n  height: 600px;\r\n  width: 600px;\r\n  position: relative;\r\n  margin-left: 32%;\r\n  top: 15%;\r\n  border-radius: 10%;\r\n}\r\n\r\n\r\n.err[_ngcontent-%COMP%] {\r\n  color: #df1919;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  font-size: 11rem;\r\n  position:absolute;\r\n  left: 15%;\r\n  top: 17%;\r\n}\r\n\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  margin-left: 42.5%;\r\n  margin-top: 11%;\r\n\r\n}\r\n\r\n\r\n.err2[_ngcontent-%COMP%] {\r\n  color: #df1919;\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  font-size: 11rem;\r\n  position:absolute;\r\n  left: 68%;\r\n  top: 17%;\r\n}\r\n\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 1.6rem;\r\n    position:absolute;\r\n    left: 16%;\r\n    top: 45%;\r\n    width: 75%;\r\n}\r\n\r\n\r\n.mat-primary[_ngcontent-%COMP%] {\r\n  background-color: rgba(24, 189, 112, 0.308);\r\n  color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7OztBQUdEO0VBQ0UsaUNBQWlDO0FBQ25DOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFFBQVE7QUFDVjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtBQUNkOzs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuOyBUaXRsZTogbm90LWZvdW5kLmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG47IEF1dGhvcjogQ2hhZCBPTmVhbFxyXG47IERhdGU6IDAyLzA5LzIwMjNcclxuOyBEZXNjcmlwdGlvbjogbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIGZvciBncGEtY2FsY3VsYXRvci1hcHBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTAsIDUwKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4Zjg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMiU7XHJcbiAgdG9wOiAxNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4uZXJyIHtcclxuICBjb2xvcjogI2RmMTkxOTtcclxuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDExcmVtO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6IDE1JTtcclxuICB0b3A6IDE3JTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tbGVmdDogNDIuNSU7XHJcbiAgbWFyZ2luLXRvcDogMTElO1xyXG5cclxufVxyXG5cclxuLmVycjIge1xyXG4gIGNvbG9yOiAjZGYxOTE5O1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTFyZW07XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDogNjglO1xyXG4gIHRvcDogMTclO1xyXG59XHJcblxyXG4ubXNnIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2JTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0LCAxODksIDExMiwgMC4zMDgpO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ty9+":
/*!******************************************************!*\
  !*** ./src/app/base-layout/base-layout.component.ts ***!
  \******************************************************/
/*! exports provided: BaseLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function() { return BaseLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/*
============================================
, Title: base-layout.component.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: base-layout.component.ts
+===========================================
*/
// import statement








// tells which css and html files to use
// export statement
class BaseLayoutComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        this.assignment = 'GPA Calculator';
    }
    ngOnInit() {
    }
    signOut() {
        this.cookieService.deleteAll();
        this.router.navigate(['/session/sign-in']);
    }
}
BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) { return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BaseLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseLayoutComponent, selectors: [["app-base-layout"]], decls: 20, vars: 1, consts: [["color", "primary"], [1, "logo"], ["src", "./assets/gpa-calculator-app.png", "height", "80"], [2, "width", "80%"], ["fxLayout", "row wrap", "fxLayoutAlign", "end start"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", 3, "click"], ["fxLayout", "row wrap"], ["fxFlex", ""], [1, "main-container"]], template: function BaseLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseLayoutComponent_Template_button_click_8_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.assignment);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztDQU9DIiwiZmlsZSI6InNyYy9hcHAvYmFzZS1sYXlvdXQvYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjsgVGl0bGU6IGJhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MgZm9yIGdwYS1jYWxjdWxhdG9yLWFwcFxyXG47IEF1dGhvcjogQ2hhZCBPTmVhbFxyXG47IERhdGU6IDAyLzA5LzIwMjNcclxuOyBEZXNjcmlwdGlvbjogYmFzZS1sYXlvdXQuY29tcG9uZW50LmNzcyBmb3IgZ3BhLWNhbGN1bGF0b3ItYXBwXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-layout',
                templateUrl: './base-layout.component.html',
                styleUrls: ['./base-layout.component.css']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-layout/base-layout.component */ "ty9+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "89dL");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "RZyK");
/* harmony import */ var _sign_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.guard */ "chz9");
/*
============================================
; Title: app-routing.module.ts
; Author: Chad ONeal
; Date: 02/09/2023
; Description: App routing module for gpa-calculator-app
============================================
*/
// import statements










// routes and paths
const routes = [
    {
        path: '',
        component: _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            }
        ],
        canActivate: [_sign_in_guard__WEBPACK_IMPORTED_MODULE_7__["SignInGuard"]]
    },
    {
        path: 'session',
        component: _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            {
                path: 'not-found',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
            },
            {
                path: 'sign-in',
                component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/not-found'
    }
];
// router module
// export statement
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/*
============================================
; Title: main.ts for gpa-calculator-app
; Author: Chad ONeal
; Date: 02/09/2023
; Description: main.ts gpa-calculator-app
============================================
*/
// import statetments




// if statement
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// dynamic content
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
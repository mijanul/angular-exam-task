"use strict";
(self["webpackChunkangular_exam_by_tushar_da"] = self["webpackChunkangular_exam_by_tushar_da"] || []).push([["src_app_alert-task-4_alert-task-4_module_ts"],{

/***/ 6848:
/*!*************************************************************!*\
  !*** ./src/app/alert-task-4/alert-task-4-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertTask4RoutingModule: () => (/* binding */ AlertTask4RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/parent/parent.component */ 2681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_0__.ParentComponent
}];
class AlertTask4RoutingModule {
  static #_ = this.ɵfac = function AlertTask4RoutingModule_Factory(t) {
    return new (t || AlertTask4RoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AlertTask4RoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertTask4RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6029:
/*!*****************************************************!*\
  !*** ./src/app/alert-task-4/alert-task-4.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertTask4Module: () => (/* binding */ AlertTask4Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _alert_task_4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert-task-4-routing.module */ 6848);
/* harmony import */ var _components_child_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/child/child.component */ 214);
/* harmony import */ var _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/parent/parent.component */ 2681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class AlertTask4Module {
  static #_ = this.ɵfac = function AlertTask4Module_Factory(t) {
    return new (t || AlertTask4Module)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AlertTask4Module
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _alert_task_4_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertTask4RoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AlertTask4Module, {
    declarations: [_components_child_child_component__WEBPACK_IMPORTED_MODULE_1__.ChildComponent, _components_parent_parent_component__WEBPACK_IMPORTED_MODULE_2__.ParentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _alert_task_4_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlertTask4RoutingModule]
  });
})();

/***/ }),

/***/ 214:
/*!******************************************************************!*\
  !*** ./src/app/alert-task-4/components/child/child.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChildComponent: () => (/* binding */ ChildComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



class ChildComponent {
  constructor() {
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  closeAlert() {
    this.close.emit();
  }
  static #_ = this.ɵfac = function ChildComponent_Factory(t) {
    return new (t || ChildComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChildComponent,
    selectors: [["app-child"]],
    inputs: {
      title: "title",
      description: "description",
      alertType: "alertType"
    },
    outputs: {
      close: "close"
    },
    decls: 9,
    vars: 4,
    consts: [["open", "", 1, "alert", 3, "ngClass"], [3, "click"]],
    template: function ChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dialog", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildComponent_Template_button_click_7_listener() {
          return ctx.closeAlert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.alertType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Alert Type: ", ctx.alertType, "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".alert[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin: 16px;\n}\n\n.alert.info[_ngcontent-%COMP%] {\n  background-color: #b3e0ff;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #e74c3c;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  margin-top: 8px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #c0392b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWxlcnQtdGFzay00L2NvbXBvbmVudHMvY2hpbGQvY2hpbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG4uYWxlcnQuaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTBmZjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2681:
/*!********************************************************************!*\
  !*** ./src/app/alert-task-4/components/parent/parent.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParentComponent: () => (/* binding */ ParentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../child/child.component */ 214);



function ParentComponent_app_child_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-child", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function ParentComponent_app_child_3_Template_app_child_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closeAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r0.alertTitle)("description", ctx_r0.alertDescription)("alertType", ctx_r0.alertType);
  }
}
class ParentComponent {
  constructor() {
    this.alertTitle = 'Parent Alert Title';
    this.alertDescription = 'This is a parent alert description.';
    this.alertType = 'info';
    this.showChild = false;
  }
  handleClose() {
    this.showChild = false;
  }
  closeAlert() {
    this.showChild = false;
  }
  static #_ = this.ɵfac = function ParentComponent_Factory(t) {
    return new (t || ParentComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ParentComponent,
    selectors: [["app-parent"]],
    decls: 4,
    vars: 2,
    consts: [[1, "container"], [3, "disabled", "click"], [3, "title", "description", "alertType", "close", 4, "ngIf"], [3, "title", "description", "alertType", "close"]],
    template: function ParentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ParentComponent_Template_button_click_1_listener() {
          return ctx.showChild = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ParentComponent_app_child_3_Template, 1, 3, "app-child", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.showChild);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChild);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _child_child_component__WEBPACK_IMPORTED_MODULE_0__.ChildComponent],
    styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f2f2f2;\n}\n\n.parent-alert[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.parent-alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  color: #333;\n}\n\n.parent-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #666;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWxlcnQtdGFzay00L2NvbXBvbmVudHMvcGFyZW50L3BhcmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHlvdXIgQ1NTIHN0eWxlcyBoZXJlICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ucGFyZW50LWFsZXJ0IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJlbnQtYWxlcnQgaDIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5wYXJlbnQtYWxlcnQgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_alert-task-4_alert-task-4_module_ts.js.map
"use strict";
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9189);
/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(793);
/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Step__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5723);
/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_3__);




const DAILY_STEP = [
    "기상",
    "코딩",
    "취침"
];
function DailyStepper() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_1___default()), {
        alternativeLabel: true,
        sx: {
            circle: {
                color: "#1c1c21"
            },
            margin: "10px 0"
        },
        children: DAILY_STEP.map((daily)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Step__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#1c1c21",
                            fontSize: "12px",
                            fontWeight: "500"
                        },
                        children: daily
                    })
                })
            }, daily))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyStepper);


/***/ })

};
;
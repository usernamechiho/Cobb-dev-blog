exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 3379:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "dailystepper_container__y5n9F",
	"divider1": "dailystepper_divider1__ER8Jq",
	"divider2": "dailystepper_divider2__H1t_R"
};


/***/ }),

/***/ 823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3379);
/* harmony import */ var _dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1__);
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import styles from './dailystepper.module.scss';
// const DAILY_STEP = ['기상', '코딩', '취침'];
// function DailyStepper() {
//   return (
//     <Stepper alternativeLabel className={styles.stepper}>
//       {DAILY_STEP.map((daily) => (
//         <Step key={daily}>
//           <StepLabel>
//             <span>{daily}</span>
//           </StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   );
// }
// export default DailyStepper;


const Divider1 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1___default().divider1)
    });
};
const Divider2 = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1___default().divider2)
    });
};
function DailyStepper() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: (_dailystepper_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "기상"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "코딩"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "취침"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider1, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider2, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyStepper);


/***/ })

};
;
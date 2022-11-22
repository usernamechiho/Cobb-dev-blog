exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 8873:
/***/ ((module) => {

// Exports
module.exports = {
	"ownerDescContainer": "description_ownerDescContainer__Dezrz",
	"mainDescription": "description_mainDescription__Dn2oO",
	"imageAndIntro": "description_imageAndIntro__P6V9r",
	"chihoJpg": "description_chihoJpg__nNzvZ",
	"intro": "description_intro__vwL75"
};


/***/ }),

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chiho1.9a90db5a.jpg","height":2880,"width":2160,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAgJP/xAAbEAACAgMBAAAAAAAAAAAAAAACAwERAAUhwf/aAAgBAQABPwDRNgUjSCa6ApvLGC9ks//EABgRAAIDAAAAAAAAAAAAAAAAAAECAAND/9oACAECAQE/AClYzUz/xAAXEQEAAwAAAAAAAAAAAAAAAAABABIh/9oACAEDAQE/AAtqs//Z"});

/***/ }),

/***/ 9566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var public_imgs_chiho1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2214);
/* harmony import */ var _description_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8873);
/* harmony import */ var _description_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_description_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Description = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_description_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ownerDescContainer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: true
                },
                className: (_description_module_scss__WEBPACK_IMPORTED_MODULE_3___default().mainDescription),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "About"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        children: [
                            "Interested in client-side development.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "Transforming ideas into reality.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "I enjoy being interlinked with people !"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: true
                },
                className: (_description_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageAndIntro),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_description_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chihoJpg),
                    style: {
                        backgroundImage: `url(${public_imgs_chiho1_jpg__WEBPACK_IMPORTED_MODULE_2__/* ["default"].src */ .Z.src})`
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: {
                    opacity: 0,
                    y: 50
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: true
                },
                className: (_description_module_scss__WEBPACK_IMPORTED_MODULE_3___default().intro),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "안녕하세요, 주니어 프론트엔드 개발자 Cobb입니다. Entry-level FE position에 관심 있습니다."
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
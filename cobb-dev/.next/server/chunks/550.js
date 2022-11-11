exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 9357:
/***/ ((module) => {

// Exports
module.exports = {
	"emailFormContainer": "emailForm_emailFormContainer__BrjeD"
};


/***/ }),

/***/ 6550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_SendRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8626);
/* harmony import */ var _mui_icons_material_SendRounded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SendRounded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emailForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9357);
/* harmony import */ var _emailForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emailForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const CustomTextField = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8___default()))({
    "& label.Mui-focused": {
        color: "#313135"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#313135"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#313135"
        },
        "&:hover fieldset": {
            borderColor: "#313135",
            boxShadow: "none"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#313135"
        }
    }
});
const EmailForm = ()=>{
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const handleChangeName = (e)=>setName(e.currentTarget.value);
    const handleChangeTitle = (e)=>setTitle(e.currentTarget.value);
    const handleChangeEmail = (e)=>setEmail(e.currentTarget.value);
    const handleChangeMessage = (e)=>setMessage(e.currentTarget.value);
    const notifyError = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("입력을 확인해주세요.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    const notifySuccess = ()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("전송을 완료했습니다.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    const handleSubmitEmail = (e)=>{
        e.preventDefault();
        if (!name.length || !title.length || !email.length || !message.length) {
            notifyError();
            return;
        }
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_6___default().send("service_4mquxy2", "template_c98c29r", {
            name,
            title,
            from_email: email,
            message
        }, "16eWOhhsJIXcTkcm4").then(()=>{
            setName("");
            setTitle("");
            setEmail("");
            setMessage("");
            notifySuccess();
        }).catch((error)=>{});
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_emailForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().emailFormContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "FORM"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmitEmail,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTextField, {
                                label: "Name",
                                variant: "standard",
                                value: name,
                                onChange: handleChangeName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTextField, {
                                label: "Your Email",
                                variant: "standard",
                                value: email,
                                style: {
                                    marginTop: "20px"
                                },
                                onChange: handleChangeEmail
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTextField, {
                                label: "Title",
                                variant: "standard",
                                style: {
                                    marginTop: "20px"
                                },
                                value: title,
                                onChange: handleChangeTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTextField, {
                                multiline: true,
                                rows: 10,
                                label: "Message",
                                variant: "standard",
                                style: {
                                    marginTop: "50px"
                                },
                                value: message,
                                onChange: handleChangeMessage
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                type: "submit",
                                variant: "contained",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_SendRounded__WEBPACK_IMPORTED_MODULE_1___default()), {}),
                                    " 메세지 전송"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ })

};
;
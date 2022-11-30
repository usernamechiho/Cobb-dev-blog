(() => {
var exports = {};
exports.id = 610;
exports.ids = [610,432];
exports.modules = {

/***/ 6586:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown_markdown__O9xQu"
};


/***/ }),

/***/ 6081:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "blog_container__H__d1",
	"header": "blog_header__8Zidt",
	"tag": "blog_tag__rPlrG",
	"publishedDate": "blog_publishedDate__sfuIu"
};


/***/ }),

/***/ 5975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const HeadMeta = ({ title , description , url , image  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title || "Cobb.dev"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description || "프론트엔드에 관하여"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: title || "Cobb.dev"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: description || "프론트엔드에 관하여"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: "www.google.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: `${"https://cobb-dev-backend-u8nfg.ondigitalocean.app"}${image}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:article:author",
                content: "Cobb.dev"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadMeta);


/***/ }),

/***/ 6888:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_vsc_dark_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9315);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism_vsc_dark_plus__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism_vsc_dark_plus__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6809);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1871);
/* harmony import */ var _markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6586);
/* harmony import */ var _markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_markdown_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-children-prop */ /* eslint-disable react/no-unstable-nested-components */ 






// eslint-disable-next-line react/prop-types
const MarkdownRenderer = ({ markdown  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: markdown,
        remarkPlugins: [
            remark_gfm__WEBPACK_IMPORTED_MODULE_4__["default"]
        ],
        rehypePlugins: [
            rehype_raw__WEBPACK_IMPORTED_MODULE_5__["default"]
        ],
        className: (_markdown_module_scss__WEBPACK_IMPORTED_MODULE_6___default().markdown),
        components: {
            code ({ node , inline , className , children , ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__.Prism, {
                    children: String(children).replace(/\n$/, ""),
                    style: (react_syntax_highlighter_dist_cjs_styles_prism_vsc_dark_plus__WEBPACK_IMPORTED_MODULE_3___default()),
                    language: match[1],
                    PreTag: "div",
                    ...props
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    className: className,
                    ...props,
                    children: children
                });
            }
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownRenderer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ dateFormat)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const dateFormat = (date)=>{
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMM D, YYYY h:mm A");
};


/***/ }),

/***/ 8694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6177);
/* harmony import */ var _Components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6888);
/* harmony import */ var _Components_HeadMeta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5975);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6081);
/* harmony import */ var _blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blog_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _Components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _Components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/no-danger */ 







const Comment = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "blog/[id].tsx -> " + "_Components/Comment"
        ]
    },
    ssr: false
});
const Article = ({ article  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_HeadMeta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: article.data.attributes.title,
                description: article.data.attributes.subtitle,
                image: article.data.attributes.thumbnail.data.attributes.url
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tag),
                                children: article.data.attributes.tag.data.attributes.tag
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: article.data.attributes.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_blog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().publishedDate),
                                children: [
                                    "Published at ",
                                    (0,_Utils_Helper__WEBPACK_IMPORTED_MODULE_2__/* .dateFormat */ .v)(article.data.attributes.publishedAt)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "markdown-body",
                        ref: (node)=>{
                            if (node) {
                                node.style.setProperty("background", "#FCFDFC", "important");
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                markdown: article.data.attributes.content
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comment, {})
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const articlePaths = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://cobb-dev-backend-u8nfg.ondigitalocean.app"}/api/articles/?populate[0]=*`);
    const paths = articlePaths.data.data.map((path)=>({
            params: {
                id: `${path.id}`
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps(ctx) {
    const { params  } = ctx;
    const { id  } = params;
    const article = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://cobb-dev-backend-u8nfg.ondigitalocean.app"}/api/articles/${id}?populate[1]=tag&populate[0]=thumbnail`);
    return {
        props: {
            article: article.data
        },
        revalidate: 10
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 9315:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 1871:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-raw");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(8694)));
module.exports = __webpack_exports__;

})();
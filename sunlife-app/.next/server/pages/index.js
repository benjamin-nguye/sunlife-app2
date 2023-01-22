(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 62:
/***/ ((module) => {

// Exports
module.exports = {
	"buttons": "inputpage_buttons____Y1I",
	"yesbutton": "inputpage_yesbutton__7ZMS1",
	"nobutton": "inputpage_nobutton__1XrDM",
	"welcomeMessage": "inputpage_welcomeMessage__D3NtU",
	"prompt": "inputpage_prompt__Oqr4o",
	"body": "inputpage_body__S_Cio",
	"welcomeBox": "inputpage_welcomeBox__ml9EJ"
};


/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2__);
// this is the user input page



function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().welcomeBox),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().welcomeMessage),
                        children: "Welcome to your First Finance Lesson!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().prompt),
                        children: "Would you like to enter your information?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/form",
                                passhref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().yesbutton),
                                    children: "Yes, enter financial information for personalized lesson."
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/form/results/noauth",
                                passhref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: (_styles_inputpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().nobutton),
                                    children: "No, continue to lesson without financial information."
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 514:
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(678));
module.exports = __webpack_exports__;

})();
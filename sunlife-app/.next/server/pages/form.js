(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 196:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Form_main__7XOQu",
	"form": "Form_form__mh4_m",
	"mainHeader": "Form_mainHeader__aIqox",
	"formlabel": "Form_formlabel__fAaih",
	"income": "Form_income__eYeD_",
	"forminput": "Form_forminput__QYnot",
	"buttonlayout": "Form_buttonlayout__ZrpBC",
	"submitbutton": "Form_submitbutton__uaV78"
};


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Form.module.css
var Form_module = __webpack_require__(196);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/form/index.js



//import Link from 'next/Link'

function Form() {
    const router = (0,router_.useRouter)();
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = {
            housingExpenses: event.target.housingExpenses.value,
            healthExpenses: event.target.healthExpenses.value,
            entertainmentExpenses: event.target.entertainmentExpenses.value,
            savingsExpenses: event.target.savingsExpenses.value,
            miscellaneousExpenses: event.target.miscellaneousExpenses.value
        };
        //JSON.stringify(data);
        router.push({
            pathname: "/form/results",
            query: {
                q: JSON.stringify(data)
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: (Form_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        id: (Form_module_default()).mainHeader,
                        children: "Enter your information"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: handleSubmit,
                        id: (Form_module_default()).form,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (Form_module_default()).formlabel,
                                children: "Monthly housing expenses:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                name: "housingExpenses",
                                className: "form-control",
                                id: (Form_module_default()).forminput,
                                type: "number",
                                placeholder: "$ Your monthly housing expenses"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (Form_module_default()).formlabel,
                                children: "Monthly health expenses:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                name: "healthExpenses",
                                className: "form-control",
                                id: (Form_module_default()).forminput,
                                type: "number",
                                placeholder: "$ Your monthly health expenses"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (Form_module_default()).formlabel,
                                children: "Monthly entertainment expenses:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                name: "entertainmentExpenses",
                                className: "form-control",
                                id: (Form_module_default()).forminput,
                                type: "number",
                                placeholder: "$ Your monthly entertainment expenses"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (Form_module_default()).formlabel,
                                children: "Monthly savings:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                name: "savingsExpenses",
                                className: "form-control",
                                id: (Form_module_default()).forminput,
                                type: "number",
                                placeholder: "$ Your monthly savings"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (Form_module_default()).formlabel,
                                children: "Monthly miscellaneous expenses:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                required: true,
                                name: "miscellaneousExpenses",
                                className: "form-control",
                                id: (Form_module_default()).forminput,
                                type: "number",
                                placeholder: "$ Miscellaneous expenses"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: (Form_module_default()).buttonlayout,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    id: (Form_module_default()).submitbutton,
                                    children: "Submit"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(0));
module.exports = __webpack_exports__;

})();
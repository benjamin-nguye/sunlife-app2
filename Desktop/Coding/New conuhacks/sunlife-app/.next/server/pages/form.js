/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/form";
exports.ids = ["pages/form"];
exports.modules = {

/***/ "./styles/Form.module.css":
/*!********************************!*\
  !*** ./styles/Form.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Form_main__7XOQu\",\n\t\"form\": \"Form_form__mh4_m\",\n\t\"mainHeader\": \"Form_mainHeader__aIqox\",\n\t\"formlabel\": \"Form_formlabel__fAaih\",\n\t\"income\": \"Form_income__eYeD_\",\n\t\"forminput\": \"Form_forminput__QYnot\",\n\t\"buttonlayout\": \"Form_buttonlayout__ZrpBC\",\n\t\"submitbutton\": \"Form_submitbutton__uaV78\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vc3R5bGVzL0Zvcm0ubW9kdWxlLmNzcz9hNjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJGb3JtX21haW5fXzdYT1F1XCIsXG5cdFwiZm9ybVwiOiBcIkZvcm1fZm9ybV9fbWg0X21cIixcblx0XCJtYWluSGVhZGVyXCI6IFwiRm9ybV9tYWluSGVhZGVyX19hSXFveFwiLFxuXHRcImZvcm1sYWJlbFwiOiBcIkZvcm1fZm9ybWxhYmVsX19mQWFpaFwiLFxuXHRcImluY29tZVwiOiBcIkZvcm1faW5jb21lX19lWWVEX1wiLFxuXHRcImZvcm1pbnB1dFwiOiBcIkZvcm1fZm9ybWlucHV0X19RWW5vdFwiLFxuXHRcImJ1dHRvbmxheW91dFwiOiBcIkZvcm1fYnV0dG9ubGF5b3V0X19acnBCQ1wiLFxuXHRcInN1Ym1pdGJ1dHRvblwiOiBcIkZvcm1fc3VibWl0YnV0dG9uX191YVY3OFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Form.module.css\n");

/***/ }),

/***/ "./pages/form/index.js":
/*!*****************************!*\
  !*** ./pages/form/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Form.module.css */ \"./styles/Form.module.css\");\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//import Link from 'next/Link'\n\nfunction Form() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = {\n            income: event.target.income.value,\n            housingExpenses: event.target.housingExpenses.value,\n            healthExpenses: event.target.healthExpenses.value,\n            entertainmentExpenses: event.target.entertainmentExpenses.value,\n            savingsExpenses: event.target.savingsExpenses.value,\n            miscellaneousExpenses: event.target.miscellaneousExpenses.value\n        };\n        //JSON.stringify(data);\n        router.push({\n            pathname: \"/form/results\",\n            query: {\n                q: JSON.stringify(data)\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainHeader),\n                        children: \"Enter your information\"\n                    }, void 0, false, {\n                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().income),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                        children: \"Monthly income:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"income\",\n                                        className: \"form-control\",\n                                        id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                        type: \"number\",\n                                        placeholder: \"$ Your monthly income\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                children: \"Monthly housing expenses:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                name: \"housingExpenses\",\n                                className: \"form-control\",\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                type: \"number\",\n                                placeholder: \"$ Your monthly housing expenses\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                children: \"Monthly health expenses:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                name: \"healthExpenses\",\n                                className: \"form-control\",\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                type: \"number\",\n                                placeholder: \"$ Your monthly health expenses\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                children: \"Monthly entertainment expenses:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                name: \"entertainmentExpenses\",\n                                className: \"form-control\",\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                type: \"number\",\n                                placeholder: \"$ Your monthly entertainment expenses\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                children: \"Monthly savings:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                name: \"savingsExpenses\",\n                                className: \"form-control\",\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                type: \"number\",\n                                placeholder: \"$ Your monthly savings\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().formlabel),\n                                children: \"Monthly miscellaneous expenses:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                name: \"miscellaneousExpenses\",\n                                className: \"form-control\",\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().forminput),\n                                type: \"number\",\n                                placeholder: \"$ Miscellaneous expenses\"\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonlayout),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    id: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default().submitbutton),\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benjaminnguyen/Desktop/Coding/ConUHacks-VII/sunlife-app/pages/form/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2Zvcm0vaW5kZXguanM/MTc5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGluY29tZTogZXZlbnQudGFyZ2V0LmluY29tZS52YWx1ZSxcbiAgICAgICAgICAgIGhvdXNpbmdFeHBlbnNlczogZXZlbnQudGFyZ2V0LmhvdXNpbmdFeHBlbnNlcy52YWx1ZSxcbiAgICAgICAgICAgIGhlYWx0aEV4cGVuc2VzOiBldmVudC50YXJnZXQuaGVhbHRoRXhwZW5zZXMudmFsdWUsXG4gICAgICAgICAgICBlbnRlcnRhaW5tZW50RXhwZW5zZXM6IGV2ZW50LnRhcmdldC5lbnRlcnRhaW5tZW50RXhwZW5zZXMudmFsdWUsXG4gICAgICAgICAgICBzYXZpbmdzRXhwZW5zZXM6IGV2ZW50LnRhcmdldC5zYXZpbmdzRXhwZW5zZXMudmFsdWUsXG4gICAgICAgICAgICBtaXNjZWxsYW5lb3VzRXhwZW5zZXM6IGV2ZW50LnRhcmdldC5taXNjZWxsYW5lb3VzRXhwZW5zZXMudmFsdWVcbiAgICAgICAgfVxuICAgICAgICAvL0pTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6IFwiL2Zvcm0vcmVzdWx0c1wiLCBxdWVyeToge3E6IEpTT04uc3RyaW5naWZ5KGRhdGEpfX0pO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG5cbiAgICAgIDxtYWluIGlkPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBpZD17c3R5bGVzLm1haW5IZWFkZXJ9PkVudGVyIHlvdXIgaW5mb3JtYXRpb248L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBpZD17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmNvbWV9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5mb3JtbGFiZWx9Pk1vbnRobHkgaW5jb21lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbmNvbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17c3R5bGVzLmZvcm1pbnB1dH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiJCBZb3VyIG1vbnRobHkgaW5jb21lXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1sYWJlbH0+TW9udGhseSBob3VzaW5nIGV4cGVuc2VzOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIG5hbWU9XCJob3VzaW5nRXhwZW5zZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17c3R5bGVzLmZvcm1pbnB1dH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiJCBZb3VyIG1vbnRobHkgaG91c2luZyBleHBlbnNlc1wiLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWxhYmVsfT5Nb250aGx5IGhlYWx0aCBleHBlbnNlczo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBuYW1lPVwiaGVhbHRoRXhwZW5zZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17c3R5bGVzLmZvcm1pbnB1dH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiJCBZb3VyIG1vbnRobHkgaGVhbHRoIGV4cGVuc2VzXCIvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5mb3JtbGFiZWx9Pk1vbnRobHkgZW50ZXJ0YWlubWVudCBleHBlbnNlczo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBuYW1lPVwiZW50ZXJ0YWlubWVudEV4cGVuc2VzXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9e3N0eWxlcy5mb3JtaW5wdXR9IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIiQgWW91ciBtb250aGx5IGVudGVydGFpbm1lbnQgZXhwZW5zZXNcIi8+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1sYWJlbH0+TW9udGhseSBzYXZpbmdzOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIG5hbWU9XCJzYXZpbmdzRXhwZW5zZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD17c3R5bGVzLmZvcm1pbnB1dH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiJCBZb3VyIG1vbnRobHkgc2F2aW5nc1wiLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWxhYmVsfT5Nb250aGx5IG1pc2NlbGxhbmVvdXMgZXhwZW5zZXM6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgbmFtZT1cIm1pc2NlbGxhbmVvdXNFeHBlbnNlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPXtzdHlsZXMuZm9ybWlucHV0fSB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCIkIE1pc2NlbGxhbmVvdXMgZXhwZW5zZXNcIi8+XG4gICAgICAgICAgey8qPExpbmsgb25DbGljaz17aGFuZGxlQ2xpY2t9IGhyZWY9e3twYXRobmFtZTogXCIvZm9ybS9yZXN1bHRzXCIsIHF1ZXJ5OiBkYXRhfX0gcGFzc2hyZWY+XG5cbiAgPC9MaW5rPiovfVxuICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJ1dHRvbmxheW91dH0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9e3N0eWxlcy5zdWJtaXRidXR0b259PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJGb3JtIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJpbmNvbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhvdXNpbmdFeHBlbnNlcyIsImhlYWx0aEV4cGVuc2VzIiwiZW50ZXJ0YWlubWVudEV4cGVuc2VzIiwic2F2aW5nc0V4cGVuc2VzIiwibWlzY2VsbGFuZW91c0V4cGVuc2VzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJxIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaWQiLCJoMSIsIm1haW5IZWFkZXIiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImZvcm1sYWJlbCIsImlucHV0IiwibmFtZSIsImZvcm1pbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9ubGF5b3V0IiwiYnV0dG9uIiwic3VibWl0YnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/form/index.js"));
module.exports = __webpack_exports__;

})();
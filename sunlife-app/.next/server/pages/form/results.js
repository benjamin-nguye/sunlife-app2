(() => {
var exports = {};
exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 601:
/***/ ((module) => {

// Exports
module.exports = {
	"row": "piechart_row__0l2P7",
	"container": "piechart_container__OLGG3"
};


/***/ }),

/***/ 413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(738);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(955);
/* harmony import */ var _styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(601);
/* harmony import */ var _styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js_auto__WEBPACK_IMPORTED_MODULE_3__]);
([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js_auto__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function PieChart({ chartData , info  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: info
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Pie, {
                data: chartData
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PieChart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(413);
/* harmony import */ var _styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(601);
/* harmony import */ var _styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_tfsa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(288);
/* harmony import */ var _public_rrsp_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(593);
/* harmony import */ var _public_investing_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);
/* harmony import */ var _public_loans_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(144);
/* harmony import */ var _public_budget_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(650);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(964);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_result_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(976);
/* harmony import */ var _styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PieChart__WEBPACK_IMPORTED_MODULE_3__]);
_components_PieChart__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function piechart() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { q  } = router.query;
    if (q) {
        const data11 = JSON.parse(q);
    } else {
        data1 = null;
    }
    const userData = {
        labels: Object.keys(data1),
        datasets: [
            {
                label: "Expense",
                data: Object.values(data1)
            }, 
        ]
    };
    console.log(userData);
    let sum = parseInt(data1.housingExpenses) + parseInt(data1.healthExpenses) + parseInt(data1.entertainmentExpenses) + parseInt(data1.savingsExpenses) + parseInt(data1.miscellaneousExpenses);
    console.log(sum);
    data1.housingExpenses = sum * 0.35;
    data1.healthExpenses = sum * 0.15;
    data1.entertainmentExpenses = sum * 0.1;
    data1.savingsExpenses = sum * 0.2;
    data1.miscellaneousExpenses = sum * 0.2;
    const standardData = {
        labels: Object.keys(data1),
        datasets: [
            {
                label: "Expense",
                data: Object.values(data1)
            }, 
        ]
    };
    console.log(standardData);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().resultbody),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().resulttitle),
                children: "This is what your budget looks like."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_piechart_module_css__WEBPACK_IMPORTED_MODULE_12___default().row),
                id: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().piecharts),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PieChart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        chartData: userData,
                        info: "Your Expense"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PieChart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        chartData: standardData,
                        info: "Your Optimal Budget"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouseltitle),
                children: "How you'll get there."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carousels),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default()), {
                    variant: "dark",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: _public_rrsp_jpg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                    alt: "RRSP",
                                    width: "700%",
                                    height: "500%"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Caption), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "RRSP"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouselcaption),
                                            children: [
                                                "An RRSP (registered retirement savings plan) is a specific type of savings account that aims to provide Canadians with retirement savings. There are several benefits in addition to accumulating savings, such as tax advantages. One tax advantage is that when you add money to your RRSP, the contributions are exempt from being taxed in the year the contributions are made. In addition, you will likely pay a lower tax rate when you take the withdrawal amount out of your account. For more information, visit ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.sunlife.ca/en/investments/rrsp/",
                                                    children: "Sun Life"
                                                }),
                                                "."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: _public_tfsa_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                    alt: "TFSA",
                                    width: "700%",
                                    height: "500%"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Caption), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "TFSA"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouselcaption),
                                            children: [
                                                "The purpose of TFSA (tax-free savings account) is to help Canadians save money. It is a registered investment account, meaning that the government has given it tax-sheltered status. Canadian residents who are 18 and older and hold a valid SIN (Social Insurance Number) are eligible for a TFSA. For more information on TFSAs, please visit ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.sunlife.ca/en/investments/tfsa/",
                                                    children: "Sun Life"
                                                }),
                                                "."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: _public_investing_jpg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                    alt: "Investing",
                                    width: "700%",
                                    height: "500%"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Caption), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Investing"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouselcaption),
                                            children: [
                                                "An investment is an asset or something that can earn you money and whose value fluctuates. This fluctuation can occur for several reasons, including supply and demand, politics, and the expectations of other investors. Investments are not guaranteed assets and may be a risky financial move. Furthermore, if you choose to participate, make informed financial decisions and seek financial assistance when necessary. To talk to an advisor and learn more about different types of investments, visit ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.sunlife.ca/en/investments/",
                                                    children: "Sun Life"
                                                }),
                                                " for more information."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: _public_loans_jpg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                    alt: "Loans",
                                    width: "700%",
                                    height: "500%"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Caption), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Loans"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouselcaption),
                                            children: "To understand what a loan is, you must understand what debt is. Debt is simply money that the borrower owes. Debts are owed to the lender, such as, a financial institution, the government, individuals, or other entities. The borrower may be allowed an advance, is a specified amount of money. By accepting an advance the borrower must agree to the lender's terms, that may include additional charges, interest, and a repayment schedule, to name a few."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Item), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    src: _public_budget_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                    alt: "Budgeting",
                                    width: "700%",
                                    height: "500%"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_10___default().Caption), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Budgeting"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_styles_result_module_css__WEBPACK_IMPORTED_MODULE_11___default().carouselcaption),
                                            children: [
                                                "It's always good to have a plan. This is why budgeting is an essential part of maintaining and growing money. A common budgeting practice is the 50-20-30 rule which, true to its name, denotes 50% of one's income, after-tax, to necessities, 20% to savings, and 30% to personal desires. The 50-20-30 rule is a popular guideline, as it allows for a healthy balance of saving and spending. There are various budgeting tools to guide you, specifically, Sun Life has a quick and easy ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://www.sunlife.ca/en/tools-and-resources/tools-and-calculators/budget-calculator/",
                                                    children: "budget calculator"
                                                }),
                                                "."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (piechart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 955:
/***/ ((module) => {

"use strict";
module.exports = import("chart.js/auto");;

/***/ }),

/***/ 738:
/***/ ((module) => {

"use strict";
module.exports = import("react-chartjs-2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,50], () => (__webpack_exec__(985)));
module.exports = __webpack_exports__;

})();
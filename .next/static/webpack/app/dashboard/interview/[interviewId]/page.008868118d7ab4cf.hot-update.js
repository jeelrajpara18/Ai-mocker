"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/interview/[interviewId]/page",{

/***/ "(app-pages-browser)/./app/dashboard/interview/[interviewId]/page.jsx":
/*!********************************************************!*\
  !*** ./app/dashboard/interview/[interviewId]/page.jsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(app-pages-browser)/./utils/db.js\");\n/* harmony import */ var _utils_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/schema */ \"(app-pages-browser)/./utils/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(app-pages-browser)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Interview(param) {\n    let { params } = param;\n    _s();\n    const unwrappedParams = (0,react__WEBPACK_IMPORTED_MODULE_3__.use)(params);\n    const { interviewId } = unwrappedParams;\n    const [interviewData, setInterviewData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Interview.useEffect\": ()=>{\n            console.log(\"Interview Id\", interviewId);\n            GetInterviewDetails();\n        }\n    }[\"Interview.useEffect\"], [\n        params\n    ]);\n    const GetInterviewDetails = async ()=>{\n        const result = await _utils_db__WEBPACK_IMPORTED_MODULE_1__.db.select().from(_utils_schema__WEBPACK_IMPORTED_MODULE_2__.MockInterview).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.eq)(_utils_schema__WEBPACK_IMPORTED_MODULE_2__.MockInterview.mockId, interviewId));\n        console.log(\"Interview Details\", result);\n        setInterviewData(result[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"font-bold text-3xl\",\n                children: \"Let's Get Started\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Interview, \"9QKWmIpUjIojSc5GjhPBPIo+WIo=\");\n_c = Interview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interview);\nvar _c;\n$RefreshReg$(_c, \"Interview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvaW50ZXJ2aWV3L1tpbnRlcnZpZXdJZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRWdDO0FBQ2U7QUFDZDtBQUN1QjtBQUV4RCxTQUFTTyxVQUFVLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDakIsTUFBTUMsa0JBQWtCTCwwQ0FBR0EsQ0FBQ0k7SUFDNUIsTUFBTSxFQUFFRSxXQUFXLEVBQUUsR0FBR0Q7SUFDeEIsTUFBTSxDQUFDRSxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkRELGdEQUFTQTsrQkFBQztZQUNSUSxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSjtZQUM1Qks7UUFDRjs4QkFBRztRQUFDUDtLQUFPO0lBRVgsTUFBTU8sc0JBQXNCO1FBQzFCLE1BQU1DLFNBQVMsTUFBTWhCLHlDQUFFQSxDQUNwQmlCLE1BQU0sR0FDTkMsSUFBSSxDQUFDakIsd0RBQWFBLEVBQ2xCa0IsS0FBSyxDQUFDakIsK0NBQUVBLENBQUNELHdEQUFhQSxDQUFDbUIsTUFBTSxFQUFFVjtRQUVsQ0csUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkU7UUFDakNKLGlCQUFpQkksTUFBTSxDQUFDLEVBQUU7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7c0JBQ0MsNEVBQUNFO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztBQUszQztHQTVCU2Y7S0FBQUE7QUE4QlQsaUVBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxBaS1tb2NrZXJcXGFwcFxcZGFzaGJvYXJkXFxpbnRlcnZpZXdcXFtpbnRlcnZpZXdJZF1cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC91dGlscy9kYlwiO1xyXG5pbXBvcnQgeyBNb2NrSW50ZXJ2aWV3IH0gZnJvbSBcIkAvdXRpbHMvc2NoZW1hXCI7XHJcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEludGVydmlldyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgdW53cmFwcGVkUGFyYW1zID0gdXNlKHBhcmFtcyk7XHJcbiAgY29uc3QgeyBpbnRlcnZpZXdJZCB9ID0gdW53cmFwcGVkUGFyYW1zO1xyXG4gIGNvbnN0IFtpbnRlcnZpZXdEYXRhLCBzZXRJbnRlcnZpZXdEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJJbnRlcnZpZXcgSWRcIiwgaW50ZXJ2aWV3SWQpO1xyXG4gICAgR2V0SW50ZXJ2aWV3RGV0YWlscygpO1xyXG4gIH0sIFtwYXJhbXNdKTtcclxuXHJcbiAgY29uc3QgR2V0SW50ZXJ2aWV3RGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuZnJvbShNb2NrSW50ZXJ2aWV3KVxyXG4gICAgICAud2hlcmUoZXEoTW9ja0ludGVydmlldy5tb2NrSWQsIGludGVydmlld0lkKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJJbnRlcnZpZXcgRGV0YWlsc1wiLCByZXN1bHQpO1xyXG4gICAgc2V0SW50ZXJ2aWV3RGF0YShyZXN1bHRbMF0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+TGV0J3MgR2V0IFN0YXJ0ZWQ8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZpZXc7XHJcbiJdLCJuYW1lcyI6WyJkYiIsIk1vY2tJbnRlcnZpZXciLCJlcSIsIlJlYWN0IiwidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnRlcnZpZXciLCJwYXJhbXMiLCJ1bndyYXBwZWRQYXJhbXMiLCJpbnRlcnZpZXdJZCIsImludGVydmlld0RhdGEiLCJzZXRJbnRlcnZpZXdEYXRhIiwiY29uc29sZSIsImxvZyIsIkdldEludGVydmlld0RldGFpbHMiLCJyZXN1bHQiLCJzZWxlY3QiLCJmcm9tIiwid2hlcmUiLCJtb2NrSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/interview/[interviewId]/page.jsx\n"));

/***/ })

});
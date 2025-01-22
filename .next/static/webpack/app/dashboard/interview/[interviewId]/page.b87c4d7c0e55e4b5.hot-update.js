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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/db */ \"(app-pages-browser)/./utils/db.js\");\n/* harmony import */ var _utils_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/schema */ \"(app-pages-browser)/./utils/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm */ \"(app-pages-browser)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var _barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=WebcamIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/webcam.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Interview(param) {\n    let { params } = param;\n    _s();\n    const unwrappedParams = (0,react__WEBPACK_IMPORTED_MODULE_4__.use)(params);\n    const { interviewId } = unwrappedParams;\n    const [interviewData, setInterviewData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [webCamEnabled, setWebCamEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Interview.useEffect\": ()=>{\n            console.log(\"Interview Id\", interviewId);\n            GetInterviewDetails();\n        }\n    }[\"Interview.useEffect\"], [\n        params\n    ]);\n    const GetInterviewDetails = async ()=>{\n        const result = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_6__.eq)(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview.mockId, interviewId));\n        console.log(\"Interview Details\", result);\n        setInterviewData(result[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Let's Get Started\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: webCamEnabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    style: {\n                        height: 300,\n                        width: 300\n                    },\n                    onUserMedia: ()=>setWebCamEnabled(true),\n                    onUserMediaError: ()=>setWebCamEnabled(false),\n                    mirrored: true\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-60 w-full bg-secondary p-10 rounded-xl my-5\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: ()=>setWebCamEnabled(true),\n                            children: \"Enable Web Cam and Microphone\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Job Role / Job Position\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 14\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Interview, \"LQmK3dTTRt23/yAS5RhUgsGJRuo=\");\n_c = Interview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interview);\nvar _c;\n$RefreshReg$(_c, \"Interview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvaW50ZXJ2aWV3L1tpbnRlcnZpZXdJZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNoQjtBQUNlO0FBQ2Q7QUFDUztBQUNjO0FBQ3RCO0FBRWxDLFNBQVNVLFVBQVUsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNqQixNQUFNQyxrQkFBa0JOLDBDQUFHQSxDQUFDSztJQUM1QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHRDtJQUN4QixNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDUSxlQUFlQyxpQkFBaUIsR0FBR1QsK0NBQVFBLENBQUM7SUFFbkRELGdEQUFTQTsrQkFBQztZQUNSVyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCTjtZQUM1Qk87UUFDRjs4QkFBRztRQUFDVDtLQUFPO0lBRVgsTUFBTVMsc0JBQXNCO1FBQzFCLE1BQU1DLFNBQVMsTUFBTXBCLHlDQUFFQSxDQUNwQnFCLE1BQU0sR0FDTkMsSUFBSSxDQUFDckIsd0RBQWFBLEVBQ2xCc0IsS0FBSyxDQUFDckIsK0NBQUVBLENBQUNELHdEQUFhQSxDQUFDdUIsTUFBTSxFQUFFWjtRQUVsQ0ssUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkU7UUFDakNOLGlCQUFpQk0sTUFBTSxDQUFDLEVBQUU7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEOzBCQUNDLDRFQUFDRTtvQkFBR0QsV0FBVTs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ0Q7MEJBQ0VWLDhCQUNDLDhEQUFDUCxxREFBTUE7b0JBQUNvQixPQUFPO3dCQUFDQyxRQUFPO3dCQUFNQyxPQUFRO29CQUFHO29CQUFHQyxhQUFhLElBQU1mLGlCQUFpQjtvQkFBT2dCLGtCQUFrQixJQUFNaEIsaUJBQWlCO29CQUFRaUIsUUFBUTs7Ozs7eUNBRS9JOztzQ0FDQSw4REFBQzlCLHNGQUFVQTs0QkFBQ3VCLFdBQVU7Ozs7OztzQ0FDdEIsOERBQUMzQix5REFBTUE7NEJBQUNtQyxTQUFXLElBQU1sQixpQkFBaUI7c0NBQU87Ozs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDUzswQkFDQyw0RUFBQ0E7OEJBQUksNEVBQUNVO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBekNTMUI7S0FBQUE7QUEyQ1QsaUVBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxBaS1tb2NrZXJcXGFwcFxcZGFzaGJvYXJkXFxpbnRlcnZpZXdcXFtpbnRlcnZpZXdJZF1cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC91dGlscy9kYlwiO1xyXG5pbXBvcnQgeyBNb2NrSW50ZXJ2aWV3IH0gZnJvbSBcIkAvdXRpbHMvc2NoZW1hXCI7XHJcbmltcG9ydCB7IGVxIH0gZnJvbSBcImRyaXp6bGUtb3JtXCI7XHJcbmltcG9ydCB7IFdlYmNhbUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYmNhbSBmcm9tIFwicmVhY3Qtd2ViY2FtXCI7XHJcblxyXG5mdW5jdGlvbiBJbnRlcnZpZXcoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHVud3JhcHBlZFBhcmFtcyA9IHVzZShwYXJhbXMpO1xyXG4gIGNvbnN0IHsgaW50ZXJ2aWV3SWQgfSA9IHVud3JhcHBlZFBhcmFtcztcclxuICBjb25zdCBbaW50ZXJ2aWV3RGF0YSwgc2V0SW50ZXJ2aWV3RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt3ZWJDYW1FbmFibGVkLCBzZXRXZWJDYW1FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiSW50ZXJ2aWV3IElkXCIsIGludGVydmlld0lkKTtcclxuICAgIEdldEludGVydmlld0RldGFpbHMoKTtcclxuICB9LCBbcGFyYW1zXSk7XHJcblxyXG4gIGNvbnN0IEdldEludGVydmlld0RldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLmZyb20oTW9ja0ludGVydmlldylcclxuICAgICAgLndoZXJlKGVxKE1vY2tJbnRlcnZpZXcubW9ja0lkLCBpbnRlcnZpZXdJZCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiSW50ZXJ2aWV3IERldGFpbHNcIiwgcmVzdWx0KTtcclxuICAgIHNldEludGVydmlld0RhdGEocmVzdWx0WzBdKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkxldCdzIEdldCBTdGFydGVkPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3dlYkNhbUVuYWJsZWQgPyAoXHJcbiAgICAgICAgICA8V2ViY2FtIHN0eWxlPXt7aGVpZ2h0OjMwMCAsIHdpZHRoIDogMzAwfX0gb25Vc2VyTWVkaWE9eygpID0+IHNldFdlYkNhbUVuYWJsZWQodHJ1ZSl9IG9uVXNlck1lZGlhRXJyb3I9eygpID0+IHNldFdlYkNhbUVuYWJsZWQoZmFsc2UpfSBtaXJyb3JlZC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8V2ViY2FtSWNvbiBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBiZy1zZWNvbmRhcnkgcC0xMCByb3VuZGVkLXhsIG15LTVcIiAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldFdlYkNhbUVuYWJsZWQodHJ1ZSl9PkVuYWJsZSBXZWIgQ2FtIGFuZCBNaWNyb3Bob25lPC9CdXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PjxzdHJvbmc+Sm9iIFJvbGUgLyBKb2IgUG9zaXRpb248L3N0cm9uZz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZpZXc7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJkYiIsIk1vY2tJbnRlcnZpZXciLCJlcSIsIldlYmNhbUljb24iLCJSZWFjdCIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2ViY2FtIiwiSW50ZXJ2aWV3IiwicGFyYW1zIiwidW53cmFwcGVkUGFyYW1zIiwiaW50ZXJ2aWV3SWQiLCJpbnRlcnZpZXdEYXRhIiwic2V0SW50ZXJ2aWV3RGF0YSIsIndlYkNhbUVuYWJsZWQiLCJzZXRXZWJDYW1FbmFibGVkIiwiY29uc29sZSIsImxvZyIsIkdldEludGVydmlld0RldGFpbHMiLCJyZXN1bHQiLCJzZWxlY3QiLCJmcm9tIiwid2hlcmUiLCJtb2NrSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvblVzZXJNZWRpYSIsIm9uVXNlck1lZGlhRXJyb3IiLCJtaXJyb3JlZCIsIm9uQ2xpY2siLCJzdHJvbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/interview/[interviewId]/page.jsx\n"));

/***/ })

});
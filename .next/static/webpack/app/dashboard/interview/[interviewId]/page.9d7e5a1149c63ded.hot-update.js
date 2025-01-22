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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/db */ \"(app-pages-browser)/./utils/db.js\");\n/* harmony import */ var _utils_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/schema */ \"(app-pages-browser)/./utils/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm */ \"(app-pages-browser)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var _barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=WebcamIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/webcam.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Interview(param) {\n    let { params } = param;\n    _s();\n    const unwrappedParams = (0,react__WEBPACK_IMPORTED_MODULE_4__.use)(params);\n    const { interviewId } = unwrappedParams;\n    const [interviewData, setInterviewData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [webCamEnabled, setWebCamEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Interview.useEffect\": ()=>{\n            console.log(\"Interview Id\", interviewId);\n            GetInterviewDetails();\n        }\n    }[\"Interview.useEffect\"], [\n        params\n    ]);\n    const GetInterviewDetails = async ()=>{\n        const result = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_6__.eq)(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview.mockId, interviewId));\n        console.log(\"Interview Details\", result);\n        setInterviewData(result[0]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Let's Get Started\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: webCamEnabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    style: {\n                        height: 300,\n                        width: 300\n                    },\n                    onUserMedia: ()=>setWebCamEnabled(true),\n                    onUserMediaError: ()=>setWebCamEnabled(false)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-60 w-full bg-secondary p-10 rounded-xl my-5\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            onClick: ()=>setWebCamEnabled(true),\n                            children: \"Enable \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Interview, \"riMAJb8ZxNt6oaN4rZeA431e5Xg=\");\n_c = Interview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interview);\nvar _c;\n$RefreshReg$(_c, \"Interview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvaW50ZXJ2aWV3L1tpbnRlcnZpZXdJZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNoQjtBQUNlO0FBQ2Q7QUFDUztBQUNjO0FBQ3RCO0FBRWxDLFNBQVNVLFVBQVUsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNqQixNQUFNQyxrQkFBa0JOLDBDQUFHQSxDQUFDSztJQUM1QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHRDtJQUN4QixNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBOytCQUFDO1lBQ1JXLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JOO1lBQzVCTztRQUNGOzhCQUFHO1FBQUNUO0tBQU87SUFFWCxNQUFNUyxzQkFBc0I7UUFDMUIsTUFBTUMsU0FBUyxNQUFNcEIseUNBQUVBLENBQ3BCcUIsTUFBTSxHQUNOQyxJQUFJLENBQUNyQix3REFBYUEsRUFDbEJzQixLQUFLLENBQUNyQiwrQ0FBRUEsQ0FBQ0Qsd0RBQWFBLENBQUN1QixNQUFNLEVBQUVaO1FBRWxDSyxRQUFRQyxHQUFHLENBQUMscUJBQXFCRTtRQUNqQ04saUJBQWlCTSxNQUFNLENBQUMsRUFBRTtJQUM1QjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUNFO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRDswQkFDRVYsOEJBQ0MsOERBQUNQLHFEQUFNQTtvQkFBQ29CLE9BQU87d0JBQUNDLFFBQU87d0JBQU1DLE9BQVE7b0JBQUc7b0JBQUdDLGFBQWEsSUFBTWYsaUJBQWlCO29CQUFPZ0Isa0JBQWtCLElBQU1oQixpQkFBaUI7Ozs7O3lDQUUvSDs7c0NBQ0EsOERBQUNiLHNGQUFVQTs0QkFBQ3VCLFdBQVU7Ozs7OztzQ0FDdEIsOERBQUMzQix5REFBTUE7NEJBQUNrQyxTQUFXLElBQU1qQixpQkFBaUI7c0NBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0Q7R0F0Q1NQO0tBQUFBO0FBd0NULGlFQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQWktbW9ja2VyXFxhcHBcXGRhc2hib2FyZFxcaW50ZXJ2aWV3XFxbaW50ZXJ2aWV3SWRdXFxwYWdlLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IHsgTW9ja0ludGVydmlldyB9IGZyb20gXCJAL3V0aWxzL3NjaGVtYVwiO1xyXG5pbXBvcnQgeyBlcSB9IGZyb20gXCJkcml6emxlLW9ybVwiO1xyXG5pbXBvcnQgeyBXZWJjYW1JY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSBcInJlYWN0LXdlYmNhbVwiO1xyXG5cclxuZnVuY3Rpb24gSW50ZXJ2aWV3KHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB1bndyYXBwZWRQYXJhbXMgPSB1c2UocGFyYW1zKTtcclxuICBjb25zdCB7IGludGVydmlld0lkIH0gPSB1bndyYXBwZWRQYXJhbXM7XHJcbiAgY29uc3QgW2ludGVydmlld0RhdGEsIHNldEludGVydmlld0RhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3dlYkNhbUVuYWJsZWQsIHNldFdlYkNhbUVuYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJJbnRlcnZpZXcgSWRcIiwgaW50ZXJ2aWV3SWQpO1xyXG4gICAgR2V0SW50ZXJ2aWV3RGV0YWlscygpO1xyXG4gIH0sIFtwYXJhbXNdKTtcclxuXHJcbiAgY29uc3QgR2V0SW50ZXJ2aWV3RGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuZnJvbShNb2NrSW50ZXJ2aWV3KVxyXG4gICAgICAud2hlcmUoZXEoTW9ja0ludGVydmlldy5tb2NrSWQsIGludGVydmlld0lkKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJJbnRlcnZpZXcgRGV0YWlsc1wiLCByZXN1bHQpO1xyXG4gICAgc2V0SW50ZXJ2aWV3RGF0YShyZXN1bHRbMF0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+TGV0J3MgR2V0IFN0YXJ0ZWQ8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7d2ViQ2FtRW5hYmxlZCA/IChcclxuICAgICAgICAgIDxXZWJjYW0gc3R5bGU9e3toZWlnaHQ6MzAwICwgd2lkdGggOiAzMDB9fSBvblVzZXJNZWRpYT17KCkgPT4gc2V0V2ViQ2FtRW5hYmxlZCh0cnVlKX0gb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gc2V0V2ViQ2FtRW5hYmxlZChmYWxzZSl9Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgIDxXZWJjYW1JY29uIGNsYXNzTmFtZT1cImgtNjAgdy1mdWxsIGJnLXNlY29uZGFyeSBwLTEwIHJvdW5kZWQteGwgbXktNVwiIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gc2V0V2ViQ2FtRW5hYmxlZCh0cnVlKX0+RW5hYmxlIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcnZpZXc7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJkYiIsIk1vY2tJbnRlcnZpZXciLCJlcSIsIldlYmNhbUljb24iLCJSZWFjdCIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2ViY2FtIiwiSW50ZXJ2aWV3IiwicGFyYW1zIiwidW53cmFwcGVkUGFyYW1zIiwiaW50ZXJ2aWV3SWQiLCJpbnRlcnZpZXdEYXRhIiwic2V0SW50ZXJ2aWV3RGF0YSIsIndlYkNhbUVuYWJsZWQiLCJzZXRXZWJDYW1FbmFibGVkIiwiY29uc29sZSIsImxvZyIsIkdldEludGVydmlld0RldGFpbHMiLCJyZXN1bHQiLCJzZWxlY3QiLCJmcm9tIiwid2hlcmUiLCJtb2NrSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvblVzZXJNZWRpYSIsIm9uVXNlck1lZGlhRXJyb3IiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/interview/[interviewId]/page.jsx\n"));

/***/ })

});
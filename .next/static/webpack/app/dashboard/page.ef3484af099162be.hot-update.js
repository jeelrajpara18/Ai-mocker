"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/_components/AddNewInterview.jsx":
/*!*******************************************************!*\
  !*** ./app/dashboard/_components/AddNewInterview.jsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddNewInterview() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [jobPosition, setJobPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobDesc, setJobDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobexp, setJobexp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n            open: isOpen,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                    asChild: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all\",\n                        onClick: ()=>setIsOpen(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-lg text-center\",\n                            children: \"+ Add New\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                    className: \"max-w-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                children: \"Tell us more about the job you are interviewing\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                children: \"Add details about the job position, your skills, and years of experience.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-gray-700\",\n                                                    children: \"Job Position/Role Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"text\",\n                                                    placeholder: \"Ex. Full Stack Developer\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobPosition(tar)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-gray-700\",\n                                                    children: \"Job Description/Tech stack in short\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                                    placeholder: \"Ex. React , Angular , Node Js , MySql etc\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-gray-700\",\n                                                    children: \"No. of years of experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"number\",\n                                                    placeholder: \"5\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-end gap-5 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"ghost\",\n                                                    onClick: ()=>setIsOpen(false),\n                                                    children: \"Cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    children: \"Start Interview\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNewInterview, \"qXhgB5Dl3squLWoYSHIPyQvUcMk=\");\n_c = AddNewInterview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewInterview);\nvar _c;\n$RefreshReg$(_c, \"AddNewInterview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvX2NvbXBvbmVudHMvQWRkTmV3SW50ZXJ2aWV3LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBUVI7QUFDZ0I7QUFDRjtBQUNNO0FBRXBELFNBQVNXOztJQUNQLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLGFBQWNDLGVBQWUsR0FBR2QsK0NBQVFBO0lBQy9DLE1BQU0sQ0FBQ2UsU0FBVUMsV0FBVyxHQUFHaEIsK0NBQVFBO0lBQ3ZDLE1BQU0sQ0FBQ2lCLFFBQVNDLFVBQVUsR0FBR2xCLCtDQUFRQTtJQUNyQyxxQkFDRSw4REFBQ21CO2tCQUNDLDRFQUFDbEIseURBQU1BO1lBQUNtQixNQUFNVDs7OEJBQ1osOERBQUNMLGdFQUFhQTtvQkFBQ2UsT0FBTzs4QkFDcEIsNEVBQUNGO3dCQUNDRyxXQUFVO3dCQUNWQyxTQUFTLElBQU1YLFVBQVU7a0NBRXpCLDRFQUFDWTs0QkFBR0YsV0FBVTtzQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2xELDhEQUFDcEIsZ0VBQWFBO29CQUFDb0IsV0FBVTs4QkFDdkIsNEVBQUNsQiwrREFBWUE7OzBDQUNYLDhEQUFDQyw4REFBV0E7MENBQUM7Ozs7OzswQ0FHYiw4REFBQ0Ysb0VBQWlCQTswQ0FBQzs7Ozs7OzBDQUluQiw4REFBQ2dCOzBDQUNDLDRFQUFDTTs7c0RBQ0MsOERBQUNOOzRDQUFJRyxXQUFVOzs4REFDYiw4REFBQ0k7b0RBQU1KLFdBQVU7OERBQWdCOzs7Ozs7OERBR2pDLDhEQUFDZCx1REFBS0E7b0RBQUNtQixNQUFLO29EQUFPQyxhQUFZO29EQUEyQkMsUUFBUTtvREFBQ0MsVUFBVSxDQUFDQyxRQUFVakIsZUFBZWtCOzs7Ozs7Ozs7Ozs7c0RBRXpHLDhEQUFDYjs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUNJO29EQUFNSixXQUFVOzhEQUFnQjs7Ozs7OzhEQUdqQyw4REFBQ2IsNkRBQVFBO29EQUFDbUIsYUFBWTtvREFBNENDLFFBQVE7Ozs7Ozs7Ozs7OztzREFFNUUsOERBQUNWOzRDQUFJRyxXQUFVOzs4REFDYiw4REFBQ0k7b0RBQU1KLFdBQVU7OERBQWdCOzs7Ozs7OERBR2pDLDhEQUFDZCx1REFBS0E7b0RBQUNtQixNQUFLO29EQUFTQyxhQUFZO29EQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7c0RBRS9DLDhEQUFDVjs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUNmLHlEQUFNQTtvREFBQzBCLFNBQVE7b0RBQVFWLFNBQVMsSUFBTVgsVUFBVTs4REFBUTs7Ozs7OzhEQUd6RCw4REFBQ0wseURBQU1BOzhEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUI7R0ExRFNHO0tBQUFBO0FBNERULGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQWktbW9ja2VyXFxhcHBcXGRhc2hib2FyZFxcX2NvbXBvbmVudHNcXEFkZE5ld0ludGVydmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxyXG4gIERpYWxvZ0hlYWRlcixcclxuICBEaWFsb2dUaXRsZSxcclxuICBEaWFsb2dUcmlnZ2VyLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcclxuXHJcbmZ1bmN0aW9uIEFkZE5ld0ludGVydmlldygpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtqb2JQb3NpdGlvbiAsIHNldEpvYlBvc2l0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2pvYkRlc2MgLCBzZXRKb2JEZXNjXSA9IHVzZVN0YXRlKCk7IFxyXG4gIGNvbnN0IFtqb2JleHAgLCBzZXRKb2JleHBdID0gdXNlU3RhdGUoKTsgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxEaWFsb2cgb3Blbj17aXNPcGVufT5cclxuICAgICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEwIGJvcmRlciByb3VuZGVkLWxnIGJnLXNlY29uZGFyeSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LW1kIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXJcIj4rIEFkZCBOZXc8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EaWFsb2dUcmlnZ2VyPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cIm1heC13LXhsXCI+XHJcbiAgICAgICAgICA8RGlhbG9nSGVhZGVyPlxyXG4gICAgICAgICAgICA8RGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgVGVsbCB1cyBtb3JlIGFib3V0IHRoZSBqb2IgeW91IGFyZSBpbnRlcnZpZXdpbmdcclxuICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgIEFkZCBkZXRhaWxzIGFib3V0IHRoZSBqb2IgcG9zaXRpb24sIHlvdXIgc2tpbGxzLCBhbmQgeWVhcnMgb2ZcclxuICAgICAgICAgICAgICBleHBlcmllbmNlLlxyXG4gICAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9iIFBvc2l0aW9uL1JvbGUgTmFtZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkV4LiBGdWxsIFN0YWNrIERldmVsb3BlclwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEpvYlBvc2l0aW9uKHRhcil9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9iIERlc2NyaXB0aW9uL1RlY2ggc3RhY2sgaW4gc2hvcnRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiRXguIFJlYWN0ICwgQW5ndWxhciAsIE5vZGUgSnMgLCBNeVNxbCBldGNcIiByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vLiBvZiB5ZWFycyBvZiBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCI1XCIgcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTUgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TdGFydCBJbnRlcnZpZXc8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3SW50ZXJ2aWV3O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nVHJpZ2dlciIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJBZGROZXdJbnRlcnZpZXciLCJpc09wZW4iLCJzZXRJc09wZW4iLCJqb2JQb3NpdGlvbiIsInNldEpvYlBvc2l0aW9uIiwiam9iRGVzYyIsInNldEpvYkRlc2MiLCJqb2JleHAiLCJzZXRKb2JleHAiLCJkaXYiLCJvcGVuIiwiYXNDaGlsZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMiIsImZvcm0iLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJldmVudCIsInRhciIsInZhcmlhbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/_components/AddNewInterview.jsx\n"));

/***/ })

});
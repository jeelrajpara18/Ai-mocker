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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddNewInterview() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [jobPosition, setJobPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobDesc, setJobDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobexp, setJobexp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        console.log(jobPosition, jobDesc, jobexp);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n            open: isOpen,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                    asChild: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all\",\n                        onClick: ()=>setIsOpen(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-lg text-center\",\n                            children: \"+ Add New\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                    className: \"max-w-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                children: \"Tell us more about the job you are interviewing\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                children: \"Add details about the job position, your skills, and years of experience.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: onSubmit,\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Job Position/Role Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"text\",\n                                                    placeholder: \"Ex. Full Stack Developer\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobPosition(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Job Description/Tech stack in short\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                                    placeholder: \"Ex. React , Angular , Node Js , MySql etc\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobDesc(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"No. of years of experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"number\",\n                                                    placeholder: \"5\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobexp(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-end gap-5 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"ghost\",\n                                                    onClick: ()=>setIsOpen(false),\n                                                    children: \"Cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    children: \"Start Interview\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNewInterview, \"qXhgB5Dl3squLWoYSHIPyQvUcMk=\");\n_c = AddNewInterview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewInterview);\nvar _c;\n$RefreshReg$(_c, \"AddNewInterview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvX2NvbXBvbmVudHMvQWRkTmV3SW50ZXJ2aWV3LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBUVI7QUFDZ0I7QUFDRjtBQUNNO0FBRXBELFNBQVNXOztJQUNQLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLGFBQWNDLGVBQWUsR0FBR2QsK0NBQVFBO0lBQy9DLE1BQU0sQ0FBQ2UsU0FBVUMsV0FBVyxHQUFHaEIsK0NBQVFBO0lBQ3ZDLE1BQU0sQ0FBQ2lCLFFBQVNDLFVBQVUsR0FBR2xCLCtDQUFRQTtJQUVyQyxNQUFNbUIsV0FBVyxDQUFDQztRQUNoQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDVixhQUFhRSxTQUFVRTtJQUNyQztJQUNBLHFCQUNFLDhEQUFDTztrQkFDQyw0RUFBQ3ZCLHlEQUFNQTtZQUFDd0IsTUFBTWQ7OzhCQUNaLDhEQUFDTCxnRUFBYUE7b0JBQUNvQixPQUFPOzhCQUNwQiw0RUFBQ0Y7d0JBQ0NHLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTWhCLFVBQVU7a0NBRXpCLDRFQUFDaUI7NEJBQUdGLFdBQVU7c0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsRCw4REFBQ3pCLGdFQUFhQTtvQkFBQ3lCLFdBQVU7OEJBQ3ZCLDRFQUFDdkIsK0RBQVlBOzswQ0FDWCw4REFBQ0MsOERBQVdBOzBDQUFDOzs7Ozs7MENBR2IsOERBQUNGLG9FQUFpQkE7MENBQUM7Ozs7OzswQ0FJbkIsOERBQUNxQjswQ0FDQyw0RUFBQ007b0NBQUtYLFVBQVVBO29DQUFVUSxXQUFVOztzREFDbEMsOERBQUNIOzRDQUFJRyxXQUFVOzs4REFDYiw4REFBQ0k7OERBQU07Ozs7Ozs4REFHUCw4REFBQ3ZCLHVEQUFLQTtvREFBQ3dCLE1BQUs7b0RBQU9DLGFBQVk7b0RBQTJCQyxRQUFRO29EQUFDQyxVQUFVLENBQUNDLFFBQVV0QixlQUFlc0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7c0RBRTNILDhEQUFDZDs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUNJOzhEQUFNOzs7Ozs7OERBR1AsOERBQUN0Qiw2REFBUUE7b0RBQUN3QixhQUFZO29EQUE0Q0MsUUFBUTtvREFBQ0MsVUFBVSxDQUFDQyxRQUFVcEIsV0FBV29CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O3NEQUUvSCw4REFBQ2Q7NENBQUlHLFdBQVU7OzhEQUNiLDhEQUFDSTs4REFBTTs7Ozs7OzhEQUdQLDhEQUFDdkIsdURBQUtBO29EQUFDd0IsTUFBSztvREFBU0MsYUFBWTtvREFBSUMsUUFBUTtvREFBQ0MsVUFBVSxDQUFDQyxRQUFVbEIsVUFBVWtCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O3NEQUVqRyw4REFBQ2Q7NENBQUlHLFdBQVU7OzhEQUNiLDhEQUFDcEIseURBQU1BO29EQUFDZ0MsU0FBUTtvREFBUVgsU0FBUyxJQUFNaEIsVUFBVTs4REFBUTs7Ozs7OzhEQUd6RCw4REFBQ0wseURBQU1BOzhEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTMUI7R0EvRFNHO0tBQUFBO0FBaUVULGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJEOlxcQWktbW9ja2VyXFxhcHBcXGRhc2hib2FyZFxcX2NvbXBvbmVudHNcXEFkZE5ld0ludGVydmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxyXG4gIERpYWxvZ0hlYWRlcixcclxuICBEaWFsb2dUaXRsZSxcclxuICBEaWFsb2dUcmlnZ2VyLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcclxuXHJcbmZ1bmN0aW9uIEFkZE5ld0ludGVydmlldygpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtqb2JQb3NpdGlvbiAsIHNldEpvYlBvc2l0aW9uXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2pvYkRlc2MgLCBzZXRKb2JEZXNjXSA9IHVzZVN0YXRlKCk7IFxyXG4gIGNvbnN0IFtqb2JleHAgLCBzZXRKb2JleHBdID0gdXNlU3RhdGUoKTsgXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGpvYlBvc2l0aW9uICxqb2JEZXNjICwgam9iZXhwKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPERpYWxvZyBvcGVuPXtpc09wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMTAgYm9yZGVyIHJvdW5kZWQtbGcgYmctc2Vjb25kYXJ5IGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpzaGFkb3ctbWQgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlclwiPisgQWRkIE5ldzwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwibWF4LXcteGxcIj5cclxuICAgICAgICAgIDxEaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICBUZWxsIHVzIG1vcmUgYWJvdXQgdGhlIGpvYiB5b3UgYXJlIGludGVydmlld2luZ1xyXG4gICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICA8RGlhbG9nRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgQWRkIGRldGFpbHMgYWJvdXQgdGhlIGpvYiBwb3NpdGlvbiwgeW91ciBza2lsbHMsIGFuZCB5ZWFycyBvZlxyXG4gICAgICAgICAgICAgIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvYiBQb3NpdGlvbi9Sb2xlIE5hbWVcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeC4gRnVsbCBTdGFjayBEZXZlbG9wZXJcIiByZXF1aXJlZCBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRKb2JQb3NpdGlvbihldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9iIERlc2NyaXB0aW9uL1RlY2ggc3RhY2sgaW4gc2hvcnRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIHBsYWNlaG9sZGVyPVwiRXguIFJlYWN0ICwgQW5ndWxhciAsIE5vZGUgSnMgLCBNeVNxbCBldGNcIiByZXF1aXJlZCBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRKb2JEZXNjKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBOby4gb2YgeWVhcnMgb2YgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiNVwiIHJlcXVpcmVkIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEpvYmV4cChldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtNSBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPlN0YXJ0IEludGVydmlldzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgPC9EaWFsb2c+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXdJbnRlcnZpZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dUcmlnZ2VyIiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0YXJlYSIsIkFkZE5ld0ludGVydmlldyIsImlzT3BlbiIsInNldElzT3BlbiIsImpvYlBvc2l0aW9uIiwic2V0Sm9iUG9zaXRpb24iLCJqb2JEZXNjIiwic2V0Sm9iRGVzYyIsImpvYmV4cCIsInNldEpvYmV4cCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImRpdiIsIm9wZW4iLCJhc0NoaWxkIiwiY2xhc3NOYW1lIiwib25DbGljayIsImgyIiwiZm9ybSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/_components/AddNewInterview.jsx\n"));

/***/ })

});
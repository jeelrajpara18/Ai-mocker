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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AddNewInterview() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [jobPosition, setJobPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobDesc, setJobDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [jobexp, setJobexp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        console.log(jobPosition, jobDesc, jobexp);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n            open: isOpen,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTrigger, {\n                    asChild: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all\",\n                        onClick: ()=>setIsOpen(true),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-lg text-center\",\n                            children: \"+ Add New\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n                    className: \"max-w-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                                children: \"Tell us more about the job you are interviewing\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                                children: \"Add details about the job position, your skills, and years of experience.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: onSubmit,\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-gray-500\",\n                                                    children: \"Job Position/Role Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"text\",\n                                                    placeholder: \"Ex. Full Stack Developer\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobPosition(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: \"Job Description/Tech stack in short\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                                    className: \"text-gray-500\",\n                                                    placeholder: \"Ex. React , Angular , Node Js , MySql etc\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobDesc(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"my-3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"text-gray-700\",\n                                                    children: \"No. of years of experience\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                                    type: \"number\",\n                                                    placeholder: \"5\",\n                                                    required: true,\n                                                    onChange: (event)=>setJobexp(event.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-end gap-5 mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"ghost\",\n                                                    onClick: ()=>setIsOpen(false),\n                                                    children: \"Cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    children: \"Start Interview\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\AddNewInterview.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNewInterview, \"qXhgB5Dl3squLWoYSHIPyQvUcMk=\");\n_c = AddNewInterview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNewInterview);\nvar _c;\n$RefreshReg$(_c, \"AddNewInterview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvX2NvbXBvbmVudHMvQWRkTmV3SW50ZXJ2aWV3LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBUVI7QUFDZ0I7QUFDRjtBQUNNO0FBRXBELFNBQVNXOztJQUNQLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLGFBQWNDLGVBQWUsR0FBR2QsK0NBQVFBO0lBQy9DLE1BQU0sQ0FBQ2UsU0FBVUMsV0FBVyxHQUFHaEIsK0NBQVFBO0lBQ3ZDLE1BQU0sQ0FBQ2lCLFFBQVNDLFVBQVUsR0FBR2xCLCtDQUFRQTtJQUVyQyxNQUFNbUIsV0FBVyxDQUFDQztRQUNoQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDVixhQUFhRSxTQUFVRTtJQUNyQztJQUNBLHFCQUNFLDhEQUFDTztrQkFDQyw0RUFBQ3ZCLHlEQUFNQTtZQUFDd0IsTUFBTWQ7OzhCQUNaLDhEQUFDTCxnRUFBYUE7b0JBQUNvQixPQUFPOzhCQUNwQiw0RUFBQ0Y7d0JBQ0NHLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTWhCLFVBQVU7a0NBRXpCLDRFQUFDaUI7NEJBQUdGLFdBQVU7c0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsRCw4REFBQ3pCLGdFQUFhQTtvQkFBQ3lCLFdBQVU7OEJBQ3ZCLDRFQUFDdkIsK0RBQVlBOzswQ0FDWCw4REFBQ0MsOERBQVdBOzBDQUFDOzs7Ozs7MENBR2IsOERBQUNGLG9FQUFpQkE7MENBQUM7Ozs7OzswQ0FJbkIsOERBQUNxQjswQ0FDQyw0RUFBQ007b0NBQUtYLFVBQVVBO29DQUFVUSxXQUFVOztzREFDbEMsOERBQUNIOzRDQUFJRyxXQUFVOzs4REFDYiw4REFBQ0k7b0RBQU1KLFdBQVU7OERBQWdCOzs7Ozs7OERBR2pDLDhEQUFDbkIsdURBQUtBO29EQUFDd0IsTUFBSztvREFBT0MsYUFBWTtvREFBMkJDLFFBQVE7b0RBQUNDLFVBQVUsQ0FBQ0MsUUFBVXRCLGVBQWVzQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OztzREFFM0gsOERBQUNkOzRDQUFJRyxXQUFVOzs4REFDYiw4REFBQ0k7OERBQU07Ozs7Ozs4REFHUCw4REFBQ3RCLDZEQUFRQTtvREFBQ2tCLFdBQVU7b0RBQWdCTSxhQUFZO29EQUE0Q0MsUUFBUTtvREFBQ0MsVUFBVSxDQUFDQyxRQUFVcEIsV0FBV29CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozs7O3NEQUV6Siw4REFBQ2Q7NENBQUlHLFdBQVU7OzhEQUNiLDhEQUFDSTtvREFBTUosV0FBVTs4REFBZ0I7Ozs7Ozs4REFHakMsOERBQUNuQix1REFBS0E7b0RBQUN3QixNQUFLO29EQUFTQyxhQUFZO29EQUFJQyxRQUFRO29EQUFDQyxVQUFVLENBQUNDLFFBQVVsQixVQUFVa0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7c0RBRWpHLDhEQUFDZDs0Q0FBSUcsV0FBVTs7OERBQ2IsOERBQUNwQix5REFBTUE7b0RBQUNnQyxTQUFRO29EQUFRWCxTQUFTLElBQU1oQixVQUFVOzhEQUFROzs7Ozs7OERBR3pELDhEQUFDTCx5REFBTUE7OERBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxQjtHQS9EU0c7S0FBQUE7QUFpRVQsaUVBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxBaS1tb2NrZXJcXGFwcFxcZGFzaGJvYXJkXFxfY29tcG9uZW50c1xcQWRkTmV3SW50ZXJ2aWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIERpYWxvZ0NvbnRlbnQsXHJcbiAgRGlhbG9nRGVzY3JpcHRpb24sXHJcbiAgRGlhbG9nSGVhZGVyLFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIERpYWxvZ1RyaWdnZXIsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xyXG5cclxuZnVuY3Rpb24gQWRkTmV3SW50ZXJ2aWV3KCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2pvYlBvc2l0aW9uICwgc2V0Sm9iUG9zaXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbam9iRGVzYyAsIHNldEpvYkRlc2NdID0gdXNlU3RhdGUoKTsgXHJcbiAgY29uc3QgW2pvYmV4cCAsIHNldEpvYmV4cF0gPSB1c2VTdGF0ZSgpOyBcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coam9iUG9zaXRpb24gLGpvYkRlc2MgLCBqb2JleHApXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RGlhbG9nIG9wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xMCBib3JkZXIgcm91bmRlZC1sZyBiZy1zZWNvbmRhcnkgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1tZCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyXCI+KyBBZGQgTmV3PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJtYXgtdy14bFwiPlxyXG4gICAgICAgICAgPERpYWxvZ0hlYWRlcj5cclxuICAgICAgICAgICAgPERpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgIFRlbGwgdXMgbW9yZSBhYm91dCB0aGUgam9iIHlvdSBhcmUgaW50ZXJ2aWV3aW5nXHJcbiAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICBBZGQgZGV0YWlscyBhYm91dCB0aGUgam9iIHBvc2l0aW9uLCB5b3VyIHNraWxscywgYW5kIHllYXJzIG9mXHJcbiAgICAgICAgICAgICAgZXhwZXJpZW5jZS5cclxuICAgICAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvYiBQb3NpdGlvbi9Sb2xlIE5hbWVcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeC4gRnVsbCBTdGFjayBEZXZlbG9wZXJcIiByZXF1aXJlZCBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRKb2JQb3NpdGlvbihldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9iIERlc2NyaXB0aW9uL1RlY2ggc3RhY2sgaW4gc2hvcnRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIiBwbGFjZWhvbGRlcj1cIkV4LiBSZWFjdCAsIEFuZ3VsYXIgLCBOb2RlIEpzICwgTXlTcWwgZXRjXCIgcmVxdWlyZWQgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Sm9iRGVzYyhldmVudC50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vLiBvZiB5ZWFycyBvZiBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCI1XCIgcmVxdWlyZWQgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Sm9iZXhwKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC01IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+U3RhcnQgSW50ZXJ2aWV3PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE5ld0ludGVydmlldztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJCdXR0b24iLCJJbnB1dCIsIlRleHRhcmVhIiwiQWRkTmV3SW50ZXJ2aWV3IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiam9iUG9zaXRpb24iLCJzZXRKb2JQb3NpdGlvbiIsImpvYkRlc2MiLCJzZXRKb2JEZXNjIiwiam9iZXhwIiwic2V0Sm9iZXhwIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwib3BlbiIsImFzQ2hpbGQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDIiLCJmb3JtIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/_components/AddNewInterview.jsx\n"));

/***/ })

});
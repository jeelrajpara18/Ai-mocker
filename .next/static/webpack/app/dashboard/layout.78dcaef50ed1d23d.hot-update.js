"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/dashboard/_components/Header.jsx":
/*!**********************************************!*\
  !*** ./app/dashboard/_components/Header.jsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logo: () => (/* binding */ Logo),\n/* harmony export */   LogoIcon: () => (/* binding */ LogoIcon),\n/* harmony export */   SidebarDemo: () => (/* binding */ SidebarDemo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ui/sidebar */ \"(app-pages-browser)/./components/ui/sidebar.jsx\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTabler.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconUserBolt.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ SidebarDemo,Logo,LogoIcon auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SidebarDemo(param) {\n    let { children } = param;\n    _s();\n    const user = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser)();\n    const links = [\n        {\n            label: \"Dashboard\",\n            href: \"/dashboard\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"Questions\",\n            href: \"/dashboard/questions\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"Upgrade\",\n            href: \"/dashboard/upgrade\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"How it works?\",\n            href: \"/dashboard/how\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }\n    ];\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden overflow-y-hidden h-screen\", \"overflow-y-hidden\" // for your use case, use `h-screen` instead of `h-[60vh]`\n        ),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {\n                open: open,\n                setOpen: setOpen,\n                animate: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarBody, {\n                    className: \"justify-between gap-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col flex-1 overflow-y-auto overflow-x-hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-8 flex flex-col gap-2\",\n                                    children: links.map((link, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarLink, {\n                                            link: link\n                                        }, idx, false, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.UserButton, {}, void 0, false, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 12\n                                }, this),\n                                user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontSize: \"16px\",\n                                        fontWeight: \"bold\"\n                                    },\n                                    children: [\n                                        user.firstName,\n                                        \" \",\n                                        user.lastName || \"\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full\",\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(SidebarDemo, \"DnP3N1cPMQjEGDDPbzkUfShj9FU=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser\n    ];\n});\n_c = SidebarDemo;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"#\",\n        className: \"font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.span, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            className: \"font-medium text-black dark:text-white whitespace-pre\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: \"/logo.svg\",\n                width: 160,\n                height: 100,\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 94,\n                columnNumber: 10\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\nconst LogoIcon = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"#\",\n        className: \"font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = LogoIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SidebarDemo\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"LogoIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvX2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQzJDO0FBTXREO0FBQ0E7QUFDVTtBQUNSO0FBQ0U7QUFDbUI7QUFFN0MsU0FBU2UsWUFBWSxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7O0lBQzFCLE1BQU1DLE9BQU9ILHNEQUFPQTtJQUNwQixNQUFNSSxRQUFRO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLG9CQUNFLDhEQUFDZix5SUFBZUE7Z0JBQUNnQixXQUFVOzs7Ozs7UUFFL0I7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsb0JBQ0UsOERBQUNiLHlJQUFZQTtnQkFBQ2MsV0FBVTs7Ozs7O1FBRTVCO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxNQUFNO1lBQ05DLG9CQUNFLDhEQUFDZCx5SUFBWUE7Z0JBQUNlLFdBQVU7Ozs7OztRQUU1QjtRQUNBO1lBQ0VILE9BQVE7WUFDUkMsTUFBTTtZQUNOQyxvQkFDRSw4REFBQ2hCLDBJQUFhQTtnQkFBQ2lCLFdBQVU7Ozs7OztRQUU3QjtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNqQyxxQkFDRSw4REFBQ3dCO1FBQ0NILFdBQVdWLDhDQUFFQSxDQUNYLHlLQUNBLG9CQUFvQiwwREFBMEQ7OzswQkFHaEYsOERBQUNWLDJEQUFPQTtnQkFBQ3FCLE1BQU1BO2dCQUFNQyxTQUFTQTtnQkFBU0UsU0FBUzswQkFDOUMsNEVBQUN2QiwrREFBV0E7b0JBQUNtQixXQUFVOztzQ0FDckIsOERBQUNHOzRCQUFJSCxXQUFVOzs4Q0FDYjs4Q0FDRSw0RUFBQ0s7Ozs7Ozs4Q0FFSCw4REFBQ0Y7b0NBQUlILFdBQVU7OENBQ1pKLE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDaEIsOERBQUMxQiwrREFBV0E7NENBQVd5QixNQUFNQTsyQ0FBWEM7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXhCLDhEQUFDTDs7OENBQ0EsOERBQUNaLHFEQUFVQTs7Ozs7Z0NBQ1ZJLHNCQUNKLDhEQUFDYztvQ0FBS0MsT0FBTzt3Q0FBRUMsVUFBVTt3Q0FBUUMsWUFBWTtvQ0FBTzs7d0NBQ2pEakIsS0FBS2tCLFNBQVM7d0NBQUM7d0NBQUVsQixLQUFLbUIsUUFBUSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDQztnQkFBS2YsV0FBVTswQkFBc0pOOzs7Ozs7Ozs7Ozs7QUFJNUs7R0FsRWdCRDs7UUFDREQsa0RBQU9BOzs7S0FETkM7QUFtRVQsTUFBTVksT0FBTztJQUNsQixxQkFDRSw4REFBQ2xCLGtEQUFJQTtRQUNIVyxNQUFLO1FBQ0xFLFdBQVU7a0JBRVYsNEVBQUNaLGtEQUFNQSxDQUFDcUIsSUFBSTtZQUNWTyxTQUFTO2dCQUFFQyxTQUFTO1lBQUU7WUFDdEJiLFNBQVM7Z0JBQUVhLFNBQVM7WUFBRTtZQUN0QmpCLFdBQVU7c0JBRVQsNEVBQUNYLGtEQUFLQTtnQkFBQzZCLEtBQUs7Z0JBQWFDLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0QsRUFBRTtNQWZXaEI7QUFnQk4sTUFBTWlCLFdBQVc7SUFDdEIscUJBQ0UsOERBQUNuQyxrREFBSUE7UUFDSFcsTUFBSztRQUNMRSxXQUFVO2tCQUVWLDRFQUFDRztZQUFJSCxXQUFVOzs7Ozs7Ozs7OztBQUdyQixFQUFFO01BVFdzQiIsInNvdXJjZXMiOlsiRDpcXEFpLW1vY2tlclxcYXBwXFxkYXNoYm9hcmRcXF9jb21wb25lbnRzXFxIZWFkZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2lkZWJhciwgU2lkZWJhckJvZHksIFNpZGViYXJMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdWkvc2lkZWJhclwiO1xyXG5pbXBvcnQge1xyXG4gIEljb25BcnJvd0xlZnQsXHJcbiAgSWNvbkJyYW5kVGFibGVyLFxyXG4gIEljb25TZXR0aW5ncyxcclxuICBJY29uVXNlckJvbHQsXHJcbn0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgVXNlckJ1dHRvbiwgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRlbW8oe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKClcclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgICBpY29uOiAoXHJcbiAgICAgICAgPEljb25CcmFuZFRhYmxlciBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMCBoLTUgdy01IGZsZXgtc2hyaW5rLTBcIiAvPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUXVlc3Rpb25zXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZC9xdWVzdGlvbnNcIixcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxJY29uVXNlckJvbHQgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgaC01IHctNSBmbGV4LXNocmluay0wXCIgLz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlVwZ3JhZGVcIixcclxuICAgICAgaHJlZjogXCIvZGFzaGJvYXJkL3VwZ3JhZGVcIixcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxJY29uU2V0dGluZ3MgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgaC01IHctNSBmbGV4LXNocmluay0wXCIgLz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsIDogXCJIb3cgaXQgd29ya3M/XCIsXHJcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZC9ob3dcIixcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxJY29uQXJyb3dMZWZ0IGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbC03MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwIGgtNSB3LTUgZmxleC1zaHJpbmstMFwiIC8+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGJnLWdyYXktMTAwIGRhcms6YmctbmV1dHJhbC04MDAgdy1mdWxsIGZsZXgtMSAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3cteS1oaWRkZW4gaC1zY3JlZW5cIixcclxuICAgICAgICBcIm92ZXJmbG93LXktaGlkZGVuXCIgLy8gZm9yIHlvdXIgdXNlIGNhc2UsIHVzZSBgaC1zY3JlZW5gIGluc3RlYWQgb2YgYGgtWzYwdmhdYFxyXG4gICAgICApfVxyXG4gICAgPlxyXG4gICAgICA8U2lkZWJhciBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBhbmltYXRlPXtmYWxzZX0+XHJcbiAgICAgICAgPFNpZGViYXJCb2R5IGNsYXNzTmFtZT1cImp1c3RpZnktYmV0d2VlbiBnYXAtMTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhckxpbmsga2V5PXtpZHh9IGxpbms9e2xpbmt9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxVc2VyQnV0dG9uLz5cclxuICAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgIHt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWUgfHwgXCJcIn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NpZGViYXJCb2R5PlxyXG4gICAgICA8L1NpZGViYXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtMiBtZDpwLTEwIHJvdW5kZWQtdGwtMnhsIGJvcmRlciBib3JkZXItbmV1dHJhbC0yMDAgZGFyazpib3JkZXItbmV1dHJhbC03MDAgYmctd2hpdGUgZGFyazpiZy1uZXV0cmFsLTkwMCBmbGV4IGZsZXgtY29sIGdhcC0yIGZsZXgtMSB3LWZ1bGwgaC1mdWxsXCI+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgey8qIDxEYXNoYm9hcmQgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBocmVmPVwiI1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIGZsZXggc3BhY2UteC0yIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtYmxhY2sgcHktMSByZWxhdGl2ZSB6LTIwXCJcclxuICAgID5cclxuICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgd2hpdGVzcGFjZS1wcmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgIDxJbWFnZSBzcmM9e1wiL2xvZ28uc3ZnXCJ9IHdpZHRoPXsxNjB9IGhlaWdodD17MTAwfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgPC9tb3Rpb24uc3Bhbj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgTG9nb0ljb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rXHJcbiAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgZmxleCBzcGFjZS14LTIgaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ibGFjayBweS0xIHJlbGF0aXZlIHotMjBcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNSB3LTYgYmctYmxhY2sgZGFyazpiZy13aGl0ZSByb3VuZGVkLWJyLWxnIHJvdW5kZWQtdHItc20gcm91bmRlZC10bC1sZyByb3VuZGVkLWJsLXNtIGZsZXgtc2hyaW5rLTBcIiAvPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2lkZWJhciIsIlNpZGViYXJCb2R5IiwiU2lkZWJhckxpbmsiLCJJY29uQXJyb3dMZWZ0IiwiSWNvbkJyYW5kVGFibGVyIiwiSWNvblNldHRpbmdzIiwiSWNvblVzZXJCb2x0IiwiTGluayIsIm1vdGlvbiIsIkltYWdlIiwiY24iLCJVc2VyQnV0dG9uIiwidXNlVXNlciIsIlNpZGViYXJEZW1vIiwiY2hpbGRyZW4iLCJ1c2VyIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJpY29uIiwiY2xhc3NOYW1lIiwib3BlbiIsInNldE9wZW4iLCJkaXYiLCJhbmltYXRlIiwiTG9nbyIsIm1hcCIsImxpbmsiLCJpZHgiLCJzcGFuIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsIm1haW4iLCJpbml0aWFsIiwib3BhY2l0eSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiTG9nb0ljb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/_components/Header.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logo: () => (/* binding */ Logo),\n/* harmony export */   LogoIcon: () => (/* binding */ LogoIcon),\n/* harmony export */   SidebarDemo: () => (/* binding */ SidebarDemo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ui/sidebar */ \"(app-pages-browser)/./components/ui/sidebar.jsx\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconBrandTabler.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconUserBolt.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconSettings.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=IconArrowLeft,IconBrandTabler,IconSettings,IconUserBolt!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowLeft.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ SidebarDemo,Logo,LogoIcon auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction SidebarDemo(param) {\n    let { children } = param;\n    var _users_user;\n    _s();\n    const users = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser)();\n    // console.log(users?.user?.fullName);\n    const links = [\n        {\n            label: \"Dashboard\",\n            href: \"/dashboard\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"Questions\",\n            href: \"/dashboard/questions\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"Upgrade\",\n            href: \"/dashboard/upgrade\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        },\n        {\n            label: \"How it works?\",\n            href: \"/dashboard/how\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconArrowLeft_IconBrandTabler_IconSettings_IconUserBolt_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                className: \"text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }\n    ];\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden\", \"h\" // for your use case, use `h-screen` instead of `h-[60vh]`\n        ),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.Sidebar, {\n                open: open,\n                setOpen: setOpen,\n                animate: false,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarBody, {\n                    className: \"justify-between gap-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col flex-1 overflow-y-auto overflow-x-hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {}, void 0, false, {\n                                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-8 flex flex-col gap-2\",\n                                    children: links.map((link, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_2__.SidebarLink, {\n                                            link: link\n                                        }, idx, false, {\n                                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.UserButton, {}, void 0, false, {\n                                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                (users === null || users === void 0 ? void 0 : (_users_user = users.user) === null || _users_user === void 0 ? void 0 : _users_user.fullName) || \"User not found\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full\",\n                children: children\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(SidebarDemo, \"kmg6maJUjdgFY7hEFYxuiKgK0x4=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useUser\n    ];\n});\n_c = SidebarDemo;\nconst Logo = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"#\",\n        className: \"font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.span, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            className: \"font-medium text-black dark:text-white whitespace-pre\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                src: \"/logo.svg\",\n                width: 160,\n                height: 100,\n                alt: \"logo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Logo;\nconst LogoIcon = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"#\",\n        className: \"font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\_components\\\\Header.jsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = LogoIcon;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SidebarDemo\");\n$RefreshReg$(_c1, \"Logo\");\n$RefreshReg$(_c2, \"LogoIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvX2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBS0E7QUFNWDtBQUNBO0FBQ1U7QUFDUjtBQUNFO0FBQ21CO0FBRTdDLFNBQVNlLFlBQVksS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaO1FBdURmQzs7SUF0RFgsTUFBTUEsUUFBUUgsc0RBQU9BO0lBQ3JCLHNDQUFzQztJQUN0QyxNQUFNSSxRQUFRO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLG9CQUNFLDhEQUFDZix5SUFBZUE7Z0JBQUNnQixXQUFVOzs7Ozs7UUFFL0I7UUFDQTtZQUNFSCxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsb0JBQ0UsOERBQUNiLHlJQUFZQTtnQkFBQ2MsV0FBVTs7Ozs7O1FBRTVCO1FBQ0E7WUFDRUgsT0FBTztZQUNQQyxNQUFNO1lBQ05DLG9CQUNFLDhEQUFDZCx5SUFBWUE7Z0JBQUNlLFdBQVU7Ozs7OztRQUU1QjtRQUNBO1lBQ0VILE9BQU87WUFDUEMsTUFBTTtZQUNOQyxvQkFDRSw4REFBQ2hCLDBJQUFhQTtnQkFBQ2lCLFdBQVU7Ozs7OztRQUU3QjtLQUNEO0lBQ0QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNqQyxxQkFDRSw4REFBQ3dCO1FBQ0NILFdBQVdWLDhDQUFFQSxDQUNYLDhJQUNBLElBQUksMERBQTBEOzs7MEJBR2hFLDhEQUFDViwyREFBT0E7Z0JBQUNxQixNQUFNQTtnQkFBTUMsU0FBU0E7Z0JBQVNFLFNBQVM7MEJBQzlDLDRFQUFDdkIsK0RBQVdBO29CQUFDbUIsV0FBVTs7c0NBQ3JCLDhEQUFDRzs0QkFBSUgsV0FBVTs7OENBQ2I7OENBQ0UsNEVBQUNLOzs7Ozs7OENBRUgsOERBQUNGO29DQUFJSCxXQUFVOzhDQUNaSixNQUFNVSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2hCLDhEQUFDMUIsK0RBQVdBOzRDQUFXeUIsTUFBTUE7MkNBQVhDOzs7Ozs7Ozs7Ozs7Ozs7O3NDQUl4Qiw4REFBQ0w7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDVCxxREFBVUE7Ozs7O2dDQUNWSSxDQUFBQSxrQkFBQUEsNkJBQUFBLGNBQUFBLE1BQU9jLElBQUksY0FBWGQsa0NBQUFBLFlBQWFlLFFBQVEsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQyw4REFBQ0M7Z0JBQUtYLFdBQVU7MEJBQ2JOOzs7Ozs7Ozs7Ozs7QUFLVDtHQWpFZ0JEOztRQUNBRCxrREFBT0E7OztLQURQQztBQWtFVCxNQUFNWSxPQUFPO0lBQ2xCLHFCQUNFLDhEQUFDbEIsa0RBQUlBO1FBQ0hXLE1BQUs7UUFDTEUsV0FBVTtrQkFFViw0RUFBQ1osa0RBQU1BLENBQUN3QixJQUFJO1lBQ1ZDLFNBQVM7Z0JBQUVDLFNBQVM7WUFBRTtZQUN0QlYsU0FBUztnQkFBRVUsU0FBUztZQUFFO1lBQ3RCZCxXQUFVO3NCQUVWLDRFQUFDWCxrREFBS0E7Z0JBQUMwQixLQUFLO2dCQUFhQyxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTlELEVBQUU7TUFmV2I7QUFnQk4sTUFBTWMsV0FBVztJQUN0QixxQkFDRSw4REFBQ2hDLGtEQUFJQTtRQUNIVyxNQUFLO1FBQ0xFLFdBQVU7a0JBRVYsNEVBQUNHO1lBQUlILFdBQVU7Ozs7Ozs7Ozs7O0FBR3JCLEVBQUU7TUFUV21CIiwic291cmNlcyI6WyJEOlxcQWktbW9ja2VyXFxhcHBcXGRhc2hib2FyZFxcX2NvbXBvbmVudHNcXEhlYWRlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFNpZGViYXIsXHJcbiAgU2lkZWJhckJvZHksXHJcbiAgU2lkZWJhckxpbmssXHJcbn0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdWkvc2lkZWJhclwiO1xyXG5pbXBvcnQge1xyXG4gIEljb25BcnJvd0xlZnQsXHJcbiAgSWNvbkJyYW5kVGFibGVyLFxyXG4gIEljb25TZXR0aW5ncyxcclxuICBJY29uVXNlckJvbHQsXHJcbn0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgVXNlckJ1dHRvbiwgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhckRlbW8oeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgdXNlcnMgPSB1c2VVc2VyKCk7XHJcbiAgLy8gY29uc29sZS5sb2codXNlcnM/LnVzZXI/LmZ1bGxOYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgICBpY29uOiAoXHJcbiAgICAgICAgPEljb25CcmFuZFRhYmxlciBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMCBoLTUgdy01IGZsZXgtc2hyaW5rLTBcIiAvPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUXVlc3Rpb25zXCIsXHJcbiAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZC9xdWVzdGlvbnNcIixcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxJY29uVXNlckJvbHQgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgaC01IHctNSBmbGV4LXNocmluay0wXCIgLz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlVwZ3JhZGVcIixcclxuICAgICAgaHJlZjogXCIvZGFzaGJvYXJkL3VwZ3JhZGVcIixcclxuICAgICAgaWNvbjogKFxyXG4gICAgICAgIDxJY29uU2V0dGluZ3MgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgaC01IHctNSBmbGV4LXNocmluay0wXCIgLz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkhvdyBpdCB3b3Jrcz9cIixcclxuICAgICAgaHJlZjogXCIvZGFzaGJvYXJkL2hvd1wiLFxyXG4gICAgICBpY29uOiAoXHJcbiAgICAgICAgPEljb25BcnJvd0xlZnQgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgaC01IHctNSBmbGV4LXNocmluay0wXCIgLz5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgYmctZ3JheS0xMDAgZGFyazpiZy1uZXV0cmFsLTgwMCB3LWZ1bGwgZmxleC0xICBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIGRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIG92ZXJmbG93LWhpZGRlblwiLFxyXG4gICAgICAgIFwiaFwiIC8vIGZvciB5b3VyIHVzZSBjYXNlLCB1c2UgYGgtc2NyZWVuYCBpbnN0ZWFkIG9mIGBoLVs2MHZoXWBcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPFNpZGViYXIgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gYW5pbWF0ZT17ZmFsc2V9PlxyXG4gICAgICAgIDxTaWRlYmFyQm9keSBjbGFzc05hbWU9XCJqdXN0aWZ5LWJldHdlZW4gZ2FwLTEwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xIG92ZXJmbG93LXktYXV0byBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXJMaW5rIGtleT17aWR4fSBsaW5rPXtsaW5rfSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VXNlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICB7dXNlcnM/LnVzZXI/LmZ1bGxOYW1lIHx8IFwiVXNlciBub3QgZm91bmRcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2lkZWJhckJvZHk+XHJcbiAgICAgIDwvU2lkZWJhcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicC0yIG1kOnAtMTAgcm91bmRlZC10bC0yeGwgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBiZy13aGl0ZSBkYXJrOmJnLW5ldXRyYWwtOTAwIGZsZXggZmxleC1jb2wgZ2FwLTIgZmxleC0xIHctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgey8qIDxEYXNoYm9hcmQgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBjb25zdCBMb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBocmVmPVwiI1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIGZsZXggc3BhY2UteC0yIGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtYmxhY2sgcHktMSByZWxhdGl2ZSB6LTIwXCJcclxuICAgID5cclxuICAgICAgPG1vdGlvbi5zcGFuXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgd2hpdGVzcGFjZS1wcmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlIHNyYz17XCIvbG9nby5zdmdcIn0gd2lkdGg9ezE2MH0gaGVpZ2h0PXsxMDB9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICA8L21vdGlvbi5zcGFuPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBMb2dvSWNvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBmbGV4IHNwYWNlLXgtMiBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LWJsYWNrIHB5LTEgcmVsYXRpdmUgei0yMFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01IHctNiBiZy1ibGFjayBkYXJrOmJnLXdoaXRlIHJvdW5kZWQtYnItbGcgcm91bmRlZC10ci1zbSByb3VuZGVkLXRsLWxnIHJvdW5kZWQtYmwtc20gZmxleC1zaHJpbmstMFwiIC8+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyIiwiU2lkZWJhckJvZHkiLCJTaWRlYmFyTGluayIsIkljb25BcnJvd0xlZnQiLCJJY29uQnJhbmRUYWJsZXIiLCJJY29uU2V0dGluZ3MiLCJJY29uVXNlckJvbHQiLCJMaW5rIiwibW90aW9uIiwiSW1hZ2UiLCJjbiIsIlVzZXJCdXR0b24iLCJ1c2VVc2VyIiwiU2lkZWJhckRlbW8iLCJjaGlsZHJlbiIsInVzZXJzIiwibGlua3MiLCJsYWJlbCIsImhyZWYiLCJpY29uIiwiY2xhc3NOYW1lIiwib3BlbiIsInNldE9wZW4iLCJkaXYiLCJhbmltYXRlIiwiTG9nbyIsIm1hcCIsImxpbmsiLCJpZHgiLCJ1c2VyIiwiZnVsbE5hbWUiLCJtYWluIiwic3BhbiIsImluaXRpYWwiLCJvcGFjaXR5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJMb2dvSWNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/_components/Header.jsx\n"));

/***/ })

});
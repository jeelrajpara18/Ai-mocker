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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/db */ \"(app-pages-browser)/./utils/db.js\");\n/* harmony import */ var _utils_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/schema */ \"(app-pages-browser)/./utils/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-orm */ \"(app-pages-browser)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var _barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=WebcamIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/webcam.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Interview(param) {\n    let { params } = param;\n    _s();\n    const unwrappedParams = (0,react__WEBPACK_IMPORTED_MODULE_4__.use)(params);\n    const { interviewId } = unwrappedParams;\n    const [interviewData, setInterviewData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); // Default to null\n    const [webCamEnabled, setWebCamEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Interview.useEffect\": ()=>{\n            // console.log(\"Interview Id\", interviewId); // Debug interviewId\n            if (interviewId) {\n                GetInterviewDetails();\n            }\n        }\n    }[\"Interview.useEffect\"], [\n        interviewId\n    ]);\n    const GetInterviewDetails = async ()=>{\n        try {\n            const result = await _utils_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_6__.eq)(_utils_schema__WEBPACK_IMPORTED_MODULE_3__.MockInterview.mockId, interviewId));\n            // console.log(\"Interview Details\", result[0]); // Log the result\n            setInterviewData(result[0]);\n        } catch (error) {\n            console.error(\"Error fetching interview details:\", error);\n        }\n    };\n    console.log(\"Interview Data\", interviewData);\n    if (!interviewData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading interview details...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    const jobDescription = interviewData.jobDesc.split(\" \") // Split the string into an array of words\n    .map((word)=>word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word\n    .join(\" \"); // Join the array back into a single string\n    console.log(jobDescription);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10 flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"font-bold text-3xl\",\n                    children: \"Let's Get Started\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: webCamEnabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        style: {\n                            height: 300,\n                            width: 300\n                        },\n                        onUserMedia: ()=>setWebCamEnabled(true),\n                        onUserMediaError: ()=>setWebCamEnabled(false),\n                        mirrored: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_WebcamIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: \"h-60 w-full bg-secondary p-10 rounded-xl my-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                onClick: ()=>setWebCamEnabled(true),\n                                children: \"Enable Web Cam and Microphone\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col my-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Job Role / Job Position:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            interviewData.jobPosition\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Job Description: \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            jobDescription\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"Years of Experience: \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            interviewData.jobExperience\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Ai-mocker\\\\app\\\\dashboard\\\\interview\\\\[interviewId]\\\\page.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Interview, \"riMAJb8ZxNt6oaN4rZeA431e5Xg=\");\n_c = Interview;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interview);\nvar _c;\n$RefreshReg$(_c, \"Interview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvaW50ZXJ2aWV3L1tpbnRlcnZpZXdJZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNoQjtBQUNlO0FBQ2Q7QUFDUztBQUNjO0FBQ3RCO0FBQ2xDLFNBQVNVLFVBQVUsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWOztJQUNqQixNQUFNQyxrQkFBa0JOLDBDQUFHQSxDQUFDSztJQUM1QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHRDtJQUN4QixNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQyxPQUFPLGtCQUFrQjtJQUM1RSxNQUFNLENBQUNRLGVBQWVDLGlCQUFpQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBOytCQUFDO1lBQ1IsaUVBQWlFO1lBQ2pFLElBQUlNLGFBQWE7Z0JBQ2ZLO1lBQ0Y7UUFDRjs4QkFBRztRQUFDTDtLQUFZO0lBRWhCLE1BQU1LLHNCQUFzQjtRQUMxQixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNbEIseUNBQUVBLENBQ3BCbUIsTUFBTSxHQUNOQyxJQUFJLENBQUNuQix3REFBYUEsRUFDbEJvQixLQUFLLENBQUNuQiwrQ0FBRUEsQ0FBQ0Qsd0RBQWFBLENBQUNxQixNQUFNLEVBQUVWO1lBRWxDLGlFQUFpRTtZQUNqRUUsaUJBQWlCSSxNQUFNLENBQUMsRUFBRTtRQUM1QixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHFDQUFxQ0E7UUFDckQ7SUFDRjtJQUNBQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCWjtJQUM5QixJQUFJLENBQUNBLGVBQWU7UUFDbEIscUJBQU8sOERBQUNhO3NCQUFJOzs7Ozs7SUFDZDtJQUNBLE1BQU1DLGlCQUFpQmQsY0FBY2UsT0FBTyxDQUN6Q0MsS0FBSyxDQUFDLEtBQUssMENBQTBDO0tBQ3JEQyxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0YsS0FBS0csS0FBSyxDQUFDLElBQUksdUJBQXVCO0tBQ25GQyxJQUFJLENBQUMsTUFBTSwyQ0FBMkM7SUFDdkRYLFFBQVFDLEdBQUcsQ0FBQ0U7SUFDZCxxQkFDRSw4REFBQ0Q7UUFBSVUsV0FBVTs7MEJBQ2IsOERBQUNWOzBCQUNDLDRFQUFDVztvQkFBR0QsV0FBVTs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ1Y7Z0JBQUlVLFdBQVU7MEJBQ2YsNEVBQUNWOzhCQUNFWCw4QkFDQyw4REFBQ1AscURBQU1BO3dCQUNMOEIsT0FBTzs0QkFBRUMsUUFBUTs0QkFBS0MsT0FBTzt3QkFBSTt3QkFDakNDLGFBQWEsSUFBTXpCLGlCQUFpQjt3QkFDcEMwQixrQkFBa0IsSUFBTTFCLGlCQUFpQjt3QkFDekMyQixRQUFROzs7Ozs2Q0FHVjs7MENBQ0UsOERBQUN4QyxzRkFBVUE7Z0NBQUNpQyxXQUFVOzs7Ozs7MENBQ3RCLDhEQUFDckMseURBQU1BO2dDQUFDNkMsU0FBUyxJQUFNNUIsaUJBQWlCOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUXJELDhEQUFDVTtnQkFBSVUsV0FBVTs7a0NBRWIsOERBQUNWOzswQ0FDQyw4REFBQ21COzBDQUFPOzs7Ozs7NEJBQWlDOzRCQUFFaEMsY0FBY2lDLFdBQVc7Ozs7Ozs7a0NBRXRFLDhEQUFDcEI7OzBDQUNDLDhEQUFDbUI7MENBQU87Ozs7Ozs0QkFDUGxCOzs7Ozs7O2tDQUVILDhEQUFDRDs7MENBQ0MsOERBQUNtQjswQ0FBTzs7Ozs7OzRCQUNQaEMsY0FBY2tDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7R0E1RVN0QztLQUFBQTtBQThFVCxpRUFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsiRDpcXEFpLW1vY2tlclxcYXBwXFxkYXNoYm9hcmRcXGludGVydmlld1xcW2ludGVydmlld0lkXVxccGFnZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL3V0aWxzL2RiXCI7XHJcbmltcG9ydCB7IE1vY2tJbnRlcnZpZXcgfSBmcm9tIFwiQC91dGlscy9zY2hlbWFcIjtcclxuaW1wb3J0IHsgZXEgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcclxuaW1wb3J0IHsgV2ViY2FtSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViY2FtIGZyb20gXCJyZWFjdC13ZWJjYW1cIjtcclxuZnVuY3Rpb24gSW50ZXJ2aWV3KHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB1bndyYXBwZWRQYXJhbXMgPSB1c2UocGFyYW1zKTtcclxuICBjb25zdCB7IGludGVydmlld0lkIH0gPSB1bndyYXBwZWRQYXJhbXM7XHJcbiAgY29uc3QgW2ludGVydmlld0RhdGEsIHNldEludGVydmlld0RhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIERlZmF1bHQgdG8gbnVsbFxyXG4gIGNvbnN0IFt3ZWJDYW1FbmFibGVkLCBzZXRXZWJDYW1FbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiSW50ZXJ2aWV3IElkXCIsIGludGVydmlld0lkKTsgLy8gRGVidWcgaW50ZXJ2aWV3SWRcclxuICAgIGlmIChpbnRlcnZpZXdJZCkge1xyXG4gICAgICBHZXRJbnRlcnZpZXdEZXRhaWxzKCk7XHJcbiAgICB9XHJcbiAgfSwgW2ludGVydmlld0lkXSk7XHJcblxyXG4gIGNvbnN0IEdldEludGVydmlld0RldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYlxyXG4gICAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAgIC5mcm9tKE1vY2tJbnRlcnZpZXcpXHJcbiAgICAgICAgLndoZXJlKGVxKE1vY2tJbnRlcnZpZXcubW9ja0lkLCBpbnRlcnZpZXdJZCkpO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJJbnRlcnZpZXcgRGV0YWlsc1wiLCByZXN1bHRbMF0pOyAvLyBMb2cgdGhlIHJlc3VsdFxyXG4gICAgICBzZXRJbnRlcnZpZXdEYXRhKHJlc3VsdFswXSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW50ZXJ2aWV3IGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKFwiSW50ZXJ2aWV3IERhdGFcIiwgaW50ZXJ2aWV3RGF0YSk7XHJcbiAgaWYgKCFpbnRlcnZpZXdEYXRhKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIGludGVydmlldyBkZXRhaWxzLi4uPC9kaXY+O1xyXG4gIH1cclxuICBjb25zdCBqb2JEZXNjcmlwdGlvbiA9IGludGVydmlld0RhdGEuam9iRGVzY1xyXG4gICAgLnNwbGl0KFwiIFwiKSAvLyBTcGxpdCB0aGUgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygd29yZHNcclxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKSAvLyBDYXBpdGFsaXplIGVhY2ggd29yZFxyXG4gICAgLmpvaW4oXCIgXCIpOyAvLyBKb2luIHRoZSBhcnJheSBiYWNrIGludG8gYSBzaW5nbGUgc3RyaW5nXHJcbiAgICBjb25zb2xlLmxvZyhqb2JEZXNjcmlwdGlvbilcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkxldCdzIEdldCBTdGFydGVkPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt3ZWJDYW1FbmFibGVkID8gKFxyXG4gICAgICAgICAgPFdlYmNhbVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgICBvblVzZXJNZWRpYT17KCkgPT4gc2V0V2ViQ2FtRW5hYmxlZCh0cnVlKX1cclxuICAgICAgICAgICAgb25Vc2VyTWVkaWFFcnJvcj17KCkgPT4gc2V0V2ViQ2FtRW5hYmxlZChmYWxzZSl9XHJcbiAgICAgICAgICAgIG1pcnJvcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8V2ViY2FtSWNvbiBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBiZy1zZWNvbmRhcnkgcC0xMCByb3VuZGVkLXhsIG15LTVcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFdlYkNhbUVuYWJsZWQodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIEVuYWJsZSBXZWIgQ2FtIGFuZCBNaWNyb3Bob25lXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG15LTNcIj5cclxuICAgICAgICB7LyogUmVuZGVyIG9ubHkgaWYgaW50ZXJ2aWV3RGF0YSBleGlzdHMgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+Sm9iIFJvbGUgLyBKb2IgUG9zaXRpb246PC9zdHJvbmc+IHtpbnRlcnZpZXdEYXRhLmpvYlBvc2l0aW9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Ryb25nPkpvYiBEZXNjcmlwdGlvbjogPC9zdHJvbmc+XHJcbiAgICAgICAgICB7am9iRGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+WWVhcnMgb2YgRXhwZXJpZW5jZTogPC9zdHJvbmc+XHJcbiAgICAgICAgICB7aW50ZXJ2aWV3RGF0YS5qb2JFeHBlcmllbmNlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludGVydmlldztcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImRiIiwiTW9ja0ludGVydmlldyIsImVxIiwiV2ViY2FtSWNvbiIsIlJlYWN0IiwidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXZWJjYW0iLCJJbnRlcnZpZXciLCJwYXJhbXMiLCJ1bndyYXBwZWRQYXJhbXMiLCJpbnRlcnZpZXdJZCIsImludGVydmlld0RhdGEiLCJzZXRJbnRlcnZpZXdEYXRhIiwid2ViQ2FtRW5hYmxlZCIsInNldFdlYkNhbUVuYWJsZWQiLCJHZXRJbnRlcnZpZXdEZXRhaWxzIiwicmVzdWx0Iiwic2VsZWN0IiwiZnJvbSIsIndoZXJlIiwibW9ja0lkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwiam9iRGVzY3JpcHRpb24iLCJqb2JEZXNjIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJjbGFzc05hbWUiLCJoMiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvblVzZXJNZWRpYSIsIm9uVXNlck1lZGlhRXJyb3IiLCJtaXJyb3JlZCIsIm9uQ2xpY2siLCJzdHJvbmciLCJqb2JQb3NpdGlvbiIsImpvYkV4cGVyaWVuY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/interview/[interviewId]/page.jsx\n"));

/***/ })

});
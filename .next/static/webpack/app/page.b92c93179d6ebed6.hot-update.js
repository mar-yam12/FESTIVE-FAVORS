"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/CartContext */ \"(app-pages-browser)/./src/app/components/CartContext.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineProduct_AiOutlineShoppingCart_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineProduct,AiOutlineShoppingCart!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_TiContacts_TiHomeOutline_react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=TiContacts,TiHomeOutline!=!react-icons/ti */ \"(app-pages-browser)/./node_modules/react-icons/ti/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { getTotalItems } = (0,_app_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart)();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setIsScrolled(window.scrollY > 50);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    const totalItems = getTotalItems();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"relative h-screen w-full overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1\n                },\n                className: \"absolute inset-0 bg-cover bg-center\",\n                style: {\n                    backgroundImage: \"url('/bg-pic.jpg')\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 backdrop-blur-sm\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    y: -100\n                },\n                animate: {\n                    y: 0\n                },\n                transition: {\n                    type: \"spring\",\n                    stiffness: 120,\n                    damping: 20\n                },\n                className: \"fixed top-0 left-0 w-full z-20 px-6 py-4 flex justify-between items-center transition-all duration-300 \".concat(isScrolled ? \"bg- shadow-lg\" : \"bg-transparent\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl font-bold font-serif \".concat(isScrolled ? \"text-rose-600\" : \"text-white\", \",\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/\",\n                            children: \"FestiveFavors\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex space-x-6 text-2xl\",\n                            children: [\n                                {\n                                    href: \"/\",\n                                    icon: _barrel_optimize_names_TiContacts_TiHomeOutline_react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiHomeOutline,\n                                    label: \"Home\"\n                                },\n                                {\n                                    href: \"/product\",\n                                    icon: _barrel_optimize_names_AiOutlineProduct_AiOutlineShoppingCart_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineProduct,\n                                    label: \"Products\"\n                                },\n                                {\n                                    href: \"/cart\",\n                                    icon: _barrel_optimize_names_AiOutlineProduct_AiOutlineShoppingCart_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineShoppingCart,\n                                    label: \"Cart\"\n                                },\n                                {\n                                    href: \"/contact\",\n                                    icon: _barrel_optimize_names_TiContacts_TiHomeOutline_react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiContacts,\n                                    label: \"Profile\"\n                                }\n                            ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: item.href,\n                                        className: \"\".concat(isScrolled ? \"text-gray-800 hover:text-rose-600\" : \"text-white hover:text-pink-200\", \" transition-colors duration-200\"),\n                                        \"aria-label\": item.label,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                    className: \"text-2xl\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                item.label === \"Cart\" && totalItems > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"absolute -top-2 -right-2 bg-rose-500 text-white rounded-full px-2 py-0.5 text-xs font-bold\",\n                                                    children: totalItems\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 45\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    delay: 0.5,\n                    duration: 0.8\n                },\n                className: \"relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-5xl sm:text-7xl font-bold font-serif mb-6\",\n                        children: \"FestiveFavors\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-2xl sm:text-4xl font-light mb-8 max-w-3xl\",\n                        children: \"Events And Party Store\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-lg sm:text-xl max-w-2xl mb-10\",\n                        children: \"Celebrate in style with birthday decorations, theme party kits, and elegant wedding accessories to make every occasion unforgettable.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {\n                        whileHover: {\n                            scale: 1.05\n                        },\n                        whileTap: {\n                            scale: 0.95\n                        },\n                        className: \"bg-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg\",\n                        children: \"Lets Decorate with Us\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yousuf\\\\Desktop\\\\fashion-e-commerce\\\\e-commece\\\\src\\\\app\\\\components\\\\Header.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"OSjtAKZEqpvHBfI0YXOb+ViVat8=\", false, function() {\n    return [\n        _app_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.useCart\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0k7QUFDMUI7QUFDNEM7QUFDZDtBQUNwQjtBQUV2QyxNQUFNVSxTQUFtQjs7SUFDckIsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR1Isb0VBQU9BO0lBQ2pDLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNYSxlQUFlO1lBQ2pCRCxjQUFjRSxPQUFPQyxPQUFPLEdBQUc7UUFDbkM7UUFDQUQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUN0RCxHQUFHLEVBQUU7SUFFTCxNQUFNSyxhQUFhUjtJQUVuQixxQkFDSSw4REFBQ1M7UUFBT0MsV0FBVTs7MEJBRWQsOERBQUNaLGlEQUFNQSxDQUFDYSxHQUFHO2dCQUNQQyxTQUFTO29CQUFFQyxTQUFTO2dCQUFFO2dCQUN0QkMsU0FBUztvQkFBRUQsU0FBUztnQkFBRTtnQkFDdEJFLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUU7Z0JBQzFCTixXQUFVO2dCQUNWTyxPQUFPO29CQUNIQyxpQkFBaUI7Z0JBQ3JCOzBCQUVBLDRFQUFDUDtvQkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7MEJBSW5CLDhEQUFDWixpREFBTUEsQ0FBQ2EsR0FBRztnQkFDUEMsU0FBUztvQkFBRU8sR0FBRyxDQUFDO2dCQUFJO2dCQUNuQkwsU0FBUztvQkFBRUssR0FBRztnQkFBRTtnQkFDaEJKLFlBQVk7b0JBQUVLLE1BQU07b0JBQVVDLFdBQVc7b0JBQUtDLFNBQVM7Z0JBQUc7Z0JBQzFEWixXQUFXLDBHQUEwSixPQUFoRFQsYUFBYSxrQkFBa0I7O2tDQUVwSiw4REFBQ1U7d0JBQUlELFdBQVcsaUNBQTZFLE9BQTVDVCxhQUFhLGtCQUFrQixjQUFhO2tDQUN6Riw0RUFBQ1IsaURBQUlBOzRCQUFDOEIsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDQztrQ0FDRyw0RUFBQ0M7NEJBQUdmLFdBQVU7c0NBQ1Q7Z0NBQ0c7b0NBQUVhLE1BQU07b0NBQUtHLE1BQU03Qix5R0FBYUE7b0NBQUU4QixPQUFPO2dDQUFPO2dDQUNoRDtvQ0FBRUosTUFBTTtvQ0FBWUcsTUFBTWhDLDBIQUFnQkE7b0NBQUVpQyxPQUFPO2dDQUFXO2dDQUM5RDtvQ0FBRUosTUFBTTtvQ0FBU0csTUFBTS9CLCtIQUFxQkE7b0NBQUVnQyxPQUFPO2dDQUFPO2dDQUM1RDtvQ0FBRUosTUFBTTtvQ0FBWUcsTUFBSzlCLHNHQUFVQTtvQ0FBRStCLE9BQU87Z0NBQVU7NkJBQ3pELENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDVCw4REFBQ0M7OENBQ0csNEVBQUN0QyxpREFBSUE7d0NBQ0Q4QixNQUFNTSxLQUFLTixJQUFJO3dDQUNmYixXQUFXLEdBQXVGLE9BQXBGVCxhQUFhLHNDQUFzQyxrQ0FBaUM7d0NBQ2xHK0IsY0FBWUgsS0FBS0YsS0FBSztrREFFdEIsNEVBQUNoQjs0Q0FBSUQsV0FBVTs7OERBQ1gsOERBQUNtQixLQUFLSCxJQUFJO29EQUFDaEIsV0FBVTs7Ozs7O2dEQUNwQm1CLEtBQUtGLEtBQUssS0FBSyxVQUFVbkIsYUFBYSxtQkFDbkMsOERBQUN5QjtvREFBS3ZCLFdBQVU7OERBQ1hGOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0FWWnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBc0J6Qiw4REFBQ2hDLGlEQUFNQSxDQUFDYSxHQUFHO2dCQUNQQyxTQUFTO29CQUFFQyxTQUFTO29CQUFHTSxHQUFHO2dCQUFHO2dCQUM3QkwsU0FBUztvQkFBRUQsU0FBUztvQkFBR00sR0FBRztnQkFBRTtnQkFDNUJKLFlBQVk7b0JBQUVtQixPQUFPO29CQUFLbEIsVUFBVTtnQkFBSTtnQkFDeENOLFdBQVU7O2tDQUVWLDhEQUFDeUI7d0JBQUd6QixXQUFVO2tDQUE0RDs7Ozs7O2tDQUMxRSw4REFBQzBCO3dCQUFHMUIsV0FBVTtrQ0FBNEQ7Ozs7OztrQ0FDMUUsOERBQUMyQjt3QkFBRTNCLFdBQVU7a0NBQWdEOzs7Ozs7a0NBQzdELDhEQUFDWixpREFBTUEsQ0FBQ3dDLE1BQU07d0JBQ1ZDLFlBQVk7NEJBQUVDLE9BQU87d0JBQUs7d0JBQzFCQyxVQUFVOzRCQUFFRCxPQUFPO3dCQUFLO3dCQUN4QjlCLFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQXhGTVg7O1FBQ3dCUCxnRUFBT0E7OztLQUQvQk87QUEwRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3g/OGZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9DYXJ0Q29udGV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVByb2R1Y3QsIEFpT3V0bGluZVNob3BwaW5nQ2FydCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgVGlDb250YWN0cywgVGlIb21lT3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3RpJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBnZXRUb3RhbEl0ZW1zIH0gPSB1c2VDYXJ0KCk7XHJcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzU2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiA1MCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBnZXRUb3RhbEl0ZW1zKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIHctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgey8qIEJhY2tncm91bmQgSW1hZ2Ugd2l0aCBCbHVyIGFuZCBPdmVybGF5ICovfVxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctY292ZXIgYmctY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgnL2JnLXBpYy5qcGcnKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjay81MCB0by1ibGFjay8yMCBiYWNrZHJvcC1ibHVyLXNtXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBOYXZiYXIgKi99XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiAxMjAsIGRhbXBpbmc6IDIwIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIHotMjAgcHgtNiBweS00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtpc1Njcm9sbGVkID8gJ2JnLSBzaGFkb3ctbGcnIDogJ2JnLXRyYW5zcGFyZW50J31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNlcmlmICR7aXNTY3JvbGxlZCA/ICd0ZXh0LXJvc2UtNjAwJyA6ICd0ZXh0LXdoaXRlJ30sYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5GZXN0aXZlRmF2b3JzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBocmVmOiBcIi9cIiwgaWNvbjogVGlIb21lT3V0bGluZSwgbGFiZWw6IFwiSG9tZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhyZWY6IFwiL3Byb2R1Y3RcIiwgaWNvbjogQWlPdXRsaW5lUHJvZHVjdCwgbGFiZWw6IFwiUHJvZHVjdHNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBocmVmOiBcIi9jYXJ0XCIsIGljb246IEFpT3V0bGluZVNob3BwaW5nQ2FydCwgbGFiZWw6IFwiQ2FydFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhyZWY6IFwiL2NvbnRhY3RcIiwgaWNvbjpUaUNvbnRhY3RzLCBsYWJlbDogXCJQcm9maWxlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1Njcm9sbGVkID8gJ3RleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1yb3NlLTYwMCcgOiAndGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXBpbmstMjAwJ30gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsID09PSBcIkNhcnRcIiAmJiB0b3RhbEl0ZW1zID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1yaWdodC0yIGJnLXJvc2UtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHB4LTIgcHktMC41IHRleHQteHMgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIENlbnRlcmVkIFRleHQgKi99XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUsIGR1cmF0aW9uOiAwLjggfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyIHB4LTQgc206cHgtNiBsZzpweC04XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC01eGwgc206dGV4dC03eGwgZm9udC1ib2xkIGZvbnQtc2VyaWYgbWItNlwiPkZlc3RpdmVGYXZvcnM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LTJ4bCBzbTp0ZXh0LTR4bCBmb250LWxpZ2h0IG1iLTggbWF4LXctM3hsJz5FdmVudHMgQW5kIFBhcnR5IFN0b3JlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LWxnIHNtOnRleHQteGwgbWF4LXctMnhsIG1iLTEwJz5DZWxlYnJhdGUgaW4gc3R5bGUgd2l0aCBiaXJ0aGRheSBkZWNvcmF0aW9ucywgdGhlbWUgcGFydHkga2l0cywgYW5kIGVsZWdhbnQgd2VkZGluZyBhY2Nlc3NvcmllcyB0byBtYWtlIGV2ZXJ5IG9jY2FzaW9uIHVuZm9yZ2V0dGFibGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1yb3NlLTYwMCB0ZXh0LXdoaXRlIHB4LTggcHktMyByb3VuZGVkLWZ1bGwgdGV4dC1sZyBmb250LXNlbWlib2xkIGhvdmVyOmJnLXJvc2UtNzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcnXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTGV0cyBEZWNvcmF0ZSB3aXRoIFVzXHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhcnQiLCJMaW5rIiwiQWlPdXRsaW5lUHJvZHVjdCIsIkFpT3V0bGluZVNob3BwaW5nQ2FydCIsIlRpQ29udGFjdHMiLCJUaUhvbWVPdXRsaW5lIiwibW90aW9uIiwiSGVhZGVyIiwiZ2V0VG90YWxJdGVtcyIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG90YWxJdGVtcyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwieSIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiaHJlZiIsIm5hdiIsInVsIiwiaWNvbiIsImxhYmVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJhcmlhLWxhYmVsIiwic3BhbiIsImRlbGF5IiwiaDEiLCJoMiIsInAiLCJidXR0b24iLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Header.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onlyfans/[id]",{

/***/ "./pages/onlyfans/[id].js":
/*!********************************!*\
  !*** ./pages/onlyfans/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/post */ \"./components/post.js\");\n/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layouts/article */ \"./components/layouts/article.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Post(param) {\n    var post1 = param.post;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_article__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: post1[0].name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                    children: [\n                        post1[0].name,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Badge, {\n                            children: post1[0].date\n                        }, void 0, false, {\n                            fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                            lineNumber: 21,\n                            columnNumber: 26\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: post1[0].text\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                    maxW: \"container.sm\",\n                    align: \"left\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                        effect: \"cards\",\n                        Keyboard: true,\n                        grabCursor: true,\n                        modules: [\n                            swiper__WEBPACK_IMPORTED_MODULE_8__.EffectCards\n                        ],\n                        className: \"mySwiper\",\n                        children: post1[0].images.map(function(post) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Image, {\n                                    borderRadius: \"lg\",\n                                    src: post,\n                                    alt: post\n                                }, void 0, false, {\n                                    fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vbmx5ZmFucy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNXO0FBQ3NCO0FBQzNCO0FBQ1E7QUFDSDtBQUUvQjtBQUNhO0FBRUk7OztBQUVyQixTQUFTWSxJQUFJLENBQUMsS0FBUSxFQUFFO1FBQVYsS0FBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7O0lBQ2pDLElBQU1DLE1BQU0sR0FBR2Qsc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS2MsTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBRVYscUJBQ0UsOERBQUNOLG1FQUFNO1FBQUNRLEtBQUssRUFBRUosS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxJQUFJO2tCQUN6Qiw0RUFBQ2QsdURBQVM7OzhCQUNSLDhEQUFDSSxtREFBSzs7d0JBQ0hLLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssSUFBSTt3QkFBQyxHQUFDO3NDQUFBLDhEQUFDWixtREFBSztzQ0FBRU8sS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxJQUFJOzs7OztnQ0FBUzs7Ozs7O3dCQUN0Qzs4QkFDUiw4REFBQ1QsNkRBQVM7OEJBQUVHLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ08sSUFBSTs7Ozs7d0JBQWE7OEJBRXJDLDhEQUFDakIsaURBQUc7b0JBQUNrQixJQUFJLEVBQUMsY0FBYztvQkFBQ0MsS0FBSyxFQUFDLE1BQU07OEJBQ25DLDRFQUFDckIsZ0RBQU07d0JBQ0xzQixNQUFNLEVBQUUsT0FBTzt3QkFDZkMsUUFBUSxFQUFFLElBQUk7d0JBQ2RDLFVBQVUsRUFBRSxJQUFJO3dCQUNoQkMsT0FBTyxFQUFFOzRCQUFDZiwrQ0FBVzt5QkFBQzt3QkFDdEJnQixTQUFTLEVBQUMsVUFBVTtrQ0FFbkJkLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxHQUFHLENBQUNoQixTQUFBQSxJQUFJO2lEQUN0Qiw4REFBQ1gscURBQVc7MENBQ1YsNEVBQUNLLG1EQUFLO29DQUFDdUIsWUFBWSxFQUFDLElBQUk7b0NBQUNDLEdBQUcsRUFBRWxCLElBQUk7b0NBQUVtQixHQUFHLEVBQUVuQixJQUFJOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3JDO3lCQUNmLENBQUM7Ozs7OzRCQUNLOzs7Ozt3QkFDTDs7Ozs7O2dCQUNJOzs7OztZQUNMLENBQ1Y7Q0FDRjtHQTlCdUJELElBQUk7O1FBQ1haLGtEQUFTOzs7QUFERlksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vbmx5ZmFucy9baWRdLmpzP2MxZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0J1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEhlYWRpbmcsIEJhZGdlLCBJbWFnZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJ1xuXG5pbXBvcnQgJ3N3aXBlci9jc3MnXG5pbXBvcnQgJ3N3aXBlci9jc3MvZWZmZWN0LWNhcmRzJ1xuXG5pbXBvcnQgeyBFZmZlY3RDYXJkcyB9IGZyb20gJ3N3aXBlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e3Bvc3RbMF0ubmFtZX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGU+XG4gICAgICAgICAge3Bvc3RbMF0ubmFtZX0gPEJhZGdlPntwb3N0WzBdLmRhdGV9PC9CYWRnZT5cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPFBhcmFncmFwaD57cG9zdFswXS50ZXh0fTwvUGFyYWdyYXBoPlxuXG4gICAgICAgIDxCb3ggbWF4Vz1cImNvbnRhaW5lci5zbVwiIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgIGVmZmVjdD17J2NhcmRzJ31cbiAgICAgICAgICAgIEtleWJvYXJkPXt0cnVlfVxuICAgICAgICAgICAgZ3JhYkN1cnNvcj17dHJ1ZX1cbiAgICAgICAgICAgIG1vZHVsZXM9e1tFZmZlY3RDYXJkc119XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteVN3aXBlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Bvc3RbMF0uaW1hZ2VzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBib3JkZXJSYWRpdXM9XCJsZ1wiIHNyYz17cG9zdH0gYWx0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29ubHlmYW5zLyR7cGFyYW1zLmlkfWApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0OiBkYXRhIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQm94IiwiQ29udGFpbmVyIiwiSGVhZGluZyIsIkJhZGdlIiwiSW1hZ2UiLCJUaXRsZSIsIkxheW91dCIsIlBhcmFncmFwaCIsIkVmZmVjdENhcmRzIiwiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGl0bGUiLCJuYW1lIiwiZGF0ZSIsInRleHQiLCJtYXhXIiwiYWxpZ24iLCJlZmZlY3QiLCJLZXlib2FyZCIsImdyYWJDdXJzb3IiLCJtb2R1bGVzIiwiY2xhc3NOYW1lIiwiaW1hZ2VzIiwibWFwIiwiYm9yZGVyUmFkaXVzIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/onlyfans/[id].js\n");

/***/ })

});
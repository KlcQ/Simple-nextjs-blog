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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Post(param) {\n    var post = param.post;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var test = useRef(id[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post[{\n                    test: test\n                }].text\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                borderRadius: \"lg\",\n                src: post[{\n                    test: test\n                }].thumb,\n                alt: post[{\n                    test: test\n                }].thumb\n            }, void 0, false, {\n                fileName: \"/home/ubuntu/dev/pages/onlyfans/[id].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Post, \"ghI7u0ZdW6CDG9HeeZm/FsxzOfs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vbmx5ZmFucy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNDO0FBQ0c7OztBQUU1QixTQUFTRyxJQUFJLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDakMsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBSSxHQUFLSyxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFDVixJQUFNRSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0gsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLHFCQUNFOzswQkFDRSw4REFBQ0ksSUFBRTswQkFBRU4sSUFBSSxDQUFDO29CQUFFSSxJQUFJLEVBQUpBLElBQUk7aUJBQUUsQ0FBQyxDQUFDRyxJQUFJOzs7OztvQkFBTTswQkFDOUIsOERBQUNWLG1EQUFLO2dCQUNKVyxZQUFZLEVBQUMsSUFBSTtnQkFDakJDLEdBQUcsRUFBRVQsSUFBSSxDQUFDO29CQUFFSSxJQUFJLEVBQUpBLElBQUk7aUJBQUUsQ0FBQyxDQUFDTSxLQUFLO2dCQUN6QkMsR0FBRyxFQUFFWCxJQUFJLENBQUM7b0JBQUVJLElBQUksRUFBSkEsSUFBSTtpQkFBRSxDQUFDLENBQUNNLEtBQUs7Ozs7O29CQUN6Qjs7b0JBQ0QsQ0FDSjtDQUNGO0dBZHVCWCxJQUFJOztRQUNYSCxrREFBUzs7O0FBREZHLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb25seWZhbnMvW2lkXS5qcz9jMWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlQ29uc3QgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB0ZXN0ID0gdXNlUmVmKGlkWzBdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3Bvc3RbeyB0ZXN0IH1dLnRleHR9PC9oMT5cbiAgICAgIDxJbWFnZVxuICAgICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICAgIHNyYz17cG9zdFt7IHRlc3QgfV0udGh1bWJ9XG4gICAgICAgIGFsdD17cG9zdFt7IHRlc3QgfV0udGh1bWJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29ubHlmYW5zYClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcS5qc29uKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0OiBkYXRhIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkltYWdlIiwidXNlQ29uc3QiLCJQb3N0IiwicG9zdCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJ0ZXN0IiwidXNlUmVmIiwiaDEiLCJ0ZXh0IiwiYm9yZGVyUmFkaXVzIiwic3JjIiwidGh1bWIiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/onlyfans/[id].js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst statusCodes = {\n    400: 'Bad Request',\n    404: 'This page could not be found',\n    405: 'Method Not Allowed',\n    500: 'Internal Server Error'\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n        return(/*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: 'body { margin: 0 }'\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\")))));\n    }\n}\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;\nconst styles = {\n    error: {\n        color: '#000',\n        background: '#fff',\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: '100vh',\n        textAlign: 'center',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'center'\n    },\n    desc: {\n        display: 'inline-block',\n        textAlign: 'left',\n        lineHeight: '49px',\n        height: '49px',\n        verticalAlign: 'middle'\n    },\n    h1: {\n        display: 'inline-block',\n        borderRight: '1px solid rgba(0, 0, 0,.3)',\n        margin: 0,\n        marginRight: '20px',\n        padding: '10px 23px 10px 0',\n        fontSize: '24px',\n        fontWeight: 500,\n        verticalAlign: 'top'\n    },\n    h2: {\n        fontSize: '14px',\n        fontWeight: 'normal',\n        lineHeight: 'inherit',\n        margin: 0,\n        padding: 0\n    }\n}; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTtBQUNaQSw4Q0FBNkMsQ0FBQztJQUMxQ0csS0FBSyxFQUFFLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkQsa0JBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUNHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU87QUFDbkQsR0FBRyxDQUFDQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFvQjtTQUN0REQsc0JBQXNCLENBQUNHLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxHQUFHLENBQUM7UUFDbENMLE9BQU8sRUFBRUssR0FBRztJQUNoQixDQUFDO0FBQ0wsQ0FBQztBQUNELEtBQUssQ0FBQ0UsV0FBVyxHQUFHLENBQUM7SUFDakIsR0FBRyxFQUFFLENBQWE7SUFDbEIsR0FBRyxFQUFFLENBQThCO0lBQ25DLEdBQUcsRUFBRSxDQUFvQjtJQUN6QixHQUFHLEVBQUUsQ0FBdUI7QUFDaEMsQ0FBQztTQUNRQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBR0MsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHRixHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsVUFBVSxHQUFHRixHQUFHLENBQUNFLFVBQVUsR0FBR0QsR0FBRyxHQUFHQSxHQUFHLENBQUNDLFVBQVUsR0FBRyxHQUFHO0lBQ3RGLE1BQU0sQ0FBQyxDQUFDO1FBQ0pBLFVBQVU7SUFDZCxDQUFDO0FBQ0wsQ0FBQztNQUNLQyxLQUFLLFNBQVNYLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDYSxTQUFTO0lBQ3hDQyxNQUFNLEdBQUcsQ0FBQztRQUNOLEtBQUssQ0FBQyxDQUFDLENBQUNILFVBQVUsRUFBRSxD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Q0FBTTtRQUNuQkMsT0FBTyxFQUFFLENBQWtCO1FBQzNCQyxRQUFRLEVBQUUsQ0FBTTtRQUNoQkMsVUFBVSxFQUFFLEdBQUc7UUFDZk4sYUFBYSxFQUFFLENBQUs7SUFDeEIsQ0FBQztJQUNEZixFQUFFLEVBQUUsQ0FBQztRQUNEb0IsUUFBUSxFQUFFLENBQU07UUFDaEJDLFVBQVUsRUFBRSxDQUFRO1FBQ3BCUCxVQUFVLEVBQUUsQ0FBUztRQUNyQkcsTUFBTSxFQUFFLENBQUM7UUFDVEUsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0FBQ0wsQ0FBQyxDQUVELENBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzdGF0dXNDb2RlcyA9IHtcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXG4gICAgNDA0OiAnVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsXG4gICAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InXG59O1xuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7IHJlcyAsIGVyciAgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGVcbiAgICB9O1xufVxuY2xhc3MgRXJyb3IgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiAnYm9keSB7IG1hcmdpbjogMCB9J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgc3RhdHVzQ29kZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSkpO1xuICAgIH1cbn1cbkVycm9yLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xuRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBlcnJvcjoge1xuICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIGhlaWdodDogJzQ5cHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDIzcHggMTBweCAwJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwib2JqIiwiX19lc01vZHVsZSIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzdHlsZXMiLCJlcnJvciIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJkZXNjIiwiaDIiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();
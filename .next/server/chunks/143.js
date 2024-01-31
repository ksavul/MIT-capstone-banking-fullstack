"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 9143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Card(props) {
    function classes() {
        const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
        const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
        return "card mb-3" + bg + txt;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes(),
        style: {
            maxWidth: "18rem"
        },
        children: [
            props.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: props.img,
                alt: "Parent transfer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-header",
                children: props.header
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body",
                children: [
                    props.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: "card-title",
                        children: props.title
                    }),
                    props.text && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "card-text",
                        children: props.text
                    }),
                    props.body,
                    props.status && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "createStatus",
                        children: props.status
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;
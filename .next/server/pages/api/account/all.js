"use strict";
(() => {
var exports = {};
exports.id = 43;
exports.ids = [43];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9779:
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_api_dal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9876);
/* harmony import */ var _helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_api_dal__WEBPACK_IMPORTED_MODULE_0__]);
_helpers_api_dal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import clientPromise from "../../../lib/mongodb";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_api_api_handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    get: getAll
}));
async function getAll(req, res) {
    try {
        // const client = await clientPromise;
        // const db = client?.db("bank");
        _helpers_api_dal__WEBPACK_IMPORTED_MODULE_0__/* .dal */ .E.getAll().then((result)=>{
            res.json(result);
            return result;
        }).catch((err)=>{
            res.json(err);
        });
    } catch (e) {
        console.error(e);
        res.json(e);
    }
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151], () => (__webpack_exec__(693)));
module.exports = __webpack_exports__;

})();
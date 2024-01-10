"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 6431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ api_handler)
});

// EXTERNAL MODULE: external "express-jwt"
var external_express_jwt_ = __webpack_require__(9779);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
var external_util_default = /*#__PURE__*/__webpack_require__.n(external_util_);
;// CONCATENATED MODULE: ./helpers/api/jwt-middleware.js


// import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();
if (!process.env.JWT_SECRET) {
    throw new Error('Invalid/Missing environment variable: "JWT_SECRET"');
}
const JWT_SECRET = process.env.JWT_SECRET;
function jwtMiddleware(req, res) {
    const middleware = (0,external_express_jwt_.expressjwt)({
        secret: JWT_SECRET,
        algorithms: [
            "HS256"
        ]
    }).unless({
        path: [
            // public routes that don't require authentications
            "/api/account/create",
            // '/api/account/all',
            "/api/account/login"
        ]
    });
    return external_util_default().promisify(middleware)(req, res);
}
/* harmony default export */ const jwt_middleware = (jwtMiddleware); // export function authorize(roles = []) {
 //   // roles param can be a single role string (e.g. Role.User or 'User')
 //   // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
 //   if (typeof roles === 'string') {
 //       roles = [roles];
 //   }
 //   return [
 //       // authenticate JWT token and attach user to request object (req.user)
 //       expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }),
 //       // authorize based on user role
 //       (req, res, next) => {
 //         console.log('req?.user : ', req?.user)
 //         console.log('req?.user?.role : ', req?.user?.role)
 //         console.log('req.user.auth : ', req.user.auth)
 //           if (roles.length && !roles.includes(req.user.role)) {
 //               // user's role is not authorized
 //               return res.status(401).json({ message: 'Unauthorized' });
 //           }
 //           // authentication and authorization successful
 //           next();
 //       }
 //   ];
 // }

;// CONCATENATED MODULE: ./helpers/api/error-handler.jsx
function errorHandler(err, res) {
    if (typeof err === "string") {
        // custom application error
        const is404 = err.toLowerCase().endsWith("not found");
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({
            message: err
        });
    }
    if (err.name === "UnauthorizedError") {
        // jwt authentication error
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
    // default to 500 server error
    console.error(err);
    return res.status(500).json({
        message: err.message
    });
}
/* harmony default export */ const error_handler = (errorHandler);

;// CONCATENATED MODULE: ./helpers/api/api-handler.js



// import { errorHandler, jwtMiddleware } from 'helpers/api';
function apiHandler(handler) {
    return async (req, res)=>{
        console.log("request : ", req.body);
        const method = req.method.toLowerCase();
        // check handler supports HTTP method
        if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);
        try {
            // global middleware
            await jwt_middleware(req, res);
            // await authorize('Admin')
            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            console.error("Global error handler - ", err);
            // throw err;
            error_handler(err, res);
        }
    };
}
/* harmony default export */ const api_handler = (apiHandler);


/***/ }),

/***/ 9876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ dal)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8870);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__]);
_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { db } from 'helpers/api';

const { serverRuntimeConfig } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
// const User = db.User;
// const userDB = clientPromise.
const dal = {
    login,
    getAll,
    // getById,
    create,
    updateBalance,
    getBankAccounts,
    createBankAccount
};
async function getUserDB() {
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
    const db = await client?.db("bank");
    const users = db?.collection("users");
    return users;
}
async function login({ email, password }) {
    const userDB = await getUserDB();
    const user = await userDB.findOne({
        email
    });
    if (!(user && bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.hash))) {
        throw "Username or password is incorrect";
    }
    // create a jwt token that is valid for 7 days
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
        sub: user.id,
        role: user.role
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    return {
        ...user,
        token
    };
}
async function getAll() {
    const UserDb = await getUserDB();
    return await UserDb.find().toArray();
}
// async function getById(id) {
//     return await User.findById(id);
// }
async function create({ email, name, password }) {
    const UserDB = await getUserDB();
    // validate
    if (await UserDB.findOne({
        email
    })) {
        throw 'Username "' + email + '" is already taken';
    }
    const user = {
        name,
        email,
        hash: bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hashSync(password, 10),
        balance: 0
    };
    UserDB.insertOne(user, {
        w: 1
    }).then((resultat)=>{
        console.log("UserCr\xe9\xe9");
    }).catch((err)=>{
        throw err;
    });
}
async function updateBalance({ email, amount }) {
    const UserDB = await getUserDB();
    const now = new Date();
    const datetime = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " @ " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    const user = await UserDB.findOneAndUpdate({
        email: email
    }, {
        $inc: {
            balance: amount
        }
    }).then((res)=>{
        console.log("Modification Successful", res.value);
    // return res.value
    }).catch((err)=>{
        throw err;
    });
    const userModyfied = await UserDB.findOneAndUpdate({
        email
    }, {
        $push: {
            history: {
                amount,
                date: datetime
            }
        }
    });
    return userModyfied.value;
}
async function createBankAccount({ email, accountName }) {
    const UserDB = await getUserDB();
    const user = await UserDB.findOneAndUpdate({
        email
    }, {
        $push: {
            bankAccounts: {
                accountName,
                balance: 0
            }
        }
    }).then((res)=>{}).catch((err)=>{
        throw err;
    });
}
async function getBankAccounts({ email }) {
    const UserDB = await getUserDB();
    const user = await UserDB.find({
        email
    }).toArray();
    return user;
} // async function update(id, params) {
 //     const user = await User.findById(id);
 //     // validate
 //     if (!user) throw 'User not found';
 //     if (user.username !== params.username && await User.findOne({ username: params.username })) {
 //         throw 'Username "' + params.username + '" is already taken';
 //     }
 //     // hash password if it was entered
 //     if (params.password) {
 //         params.hash = bcrypt.hashSync(params.password, 10);
 //     }
 //     // copy params properties to user
 //     Object.assign(user, params);
 //     await user.save();
 // }
 // async function _delete(id) {
 //     await User.findByIdAndRemove(id);
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);
next_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Ensure that 'MONGODB_URI' environment variable is set
if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
// const uri = 'localhost/';
const options = {};
let client = null;
let clientPromise;
try {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
    console.log("connection established");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
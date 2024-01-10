exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_contexts_userContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4350);


const useUserContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_stores_contexts_userContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserContext);


/***/ }),

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./hooks/useUserContext.jsx
var useUserContext = __webpack_require__(390);
;// CONCATENATED MODULE: ./components/NavBar.jsx





function NavLink({ children, href, title, hoveredItem, setHoveredItem }) {
    // const [hoveredItem, setHoveredItem] = React.useState(null);
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx("li", {
        className: `nav-item`,
        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: href,
            className: `nav-link rounded ${router.asPath === `/${href}` ? "active bg-secondary text-white" : hoveredItem === href ? "bg-lightGray" : ""}`,
            title: title,
            onMouseEnter: ()=>setHoveredItem(href),
            onMouseLeave: ()=>setHoveredItem(null),
            children: title
        })
    });
}
const navigation = [
    {
        title: "Create Account",
        href: "CreateAccount",
        AuthorizeRoles: [
            "admin",
            "customer",
            "guest"
        ]
    },
    {
        title: "Login",
        href: "Login",
        AuthorizeRoles: [
            "admin",
            "customer",
            "guest"
        ]
    },
    {
        title: "Deposit",
        href: "Deposit",
        AuthorizeRoles: [
            "admin",
            "customer"
        ]
    },
    {
        title: "Withdraw",
        href: "Withdraw",
        AuthorizeRoles: [
            "admin",
            "customer"
        ]
    },
    {
        title: "Bank Accounts",
        href: "BankAccounts",
        AuthorizeRoles: [
            "admin",
            "customer"
        ]
    },
    {
        title: "All Data",
        href: "AllData",
        AuthorizeRoles: [
            "admin",
            "customer"
        ]
    }
];
function NavBar() {
    const [hoveredItem, setHoveredItem] = external_react_.useState(null);
    const { currentUser, setCurrentUser } = (0,useUserContext/* default */.Z)();
    function getDescription(item) {
        switch(item){
            case "CreateAccount":
                return "Create a new account";
            case "Login":
                return "Log in to your account";
            case "Deposit":
                return "Make a deposit";
            case "Withdraw":
                return "Withdraw funds";
            case "BankAccounts":
                return "Handle savings accounts";
            case "AllData":
                return "View all data";
            default:
                return "";
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                className: "navbar navbar-expand-md navbar-light p-3 bg-light",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        className: "navbar-brand",
                        children: "Bad Bank"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarNav",
                        "aria-controls": "navbarNav",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarNav",
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "navbar-nav mr-auto",
                            children: navigation?.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: (item?.AuthorizeRoles.includes("guest") || currentUser) && /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                        href: item.href,
                                        title: item.title,
                                        setHoveredItem: setHoveredItem,
                                        hoveredItem: hoveredItem
                                    })
                                }, index))
                        })
                    }),
                    currentUser?.name && /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "username",
                        children: currentUser?.name || ""
                    })
                ]
            }),
            hoveredItem && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "description-popup",
                children: getDescription(hoveredItem)
            })
        ]
    });
}
/* harmony default export */ const components_NavBar = (NavBar);

// EXTERNAL MODULE: ./stores/contexts/userContext.jsx
var userContext = __webpack_require__(4350);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./components/Layout.jsx





function Layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(userContext/* UserProvider */.d, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
                        rel: "stylesheet",
                        integrity: "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",
                        crossOrigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Bank"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "container",
                style: {
                    padding: "20px"
                },
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component, pageProps }) {
    // const client = useMongoClient(); // Establish MongoDB connection using the custom hook.
    return /*#__PURE__*/ jsx_runtime.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 4350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   d: () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UserProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("null");
    // const [state, dispatch] = useReducer(playerReducer, initialState);
    // const { gameState, updateGameInfo, setPreviousGameState } = useGamesContext();
    // const
    // const [gameIsSaved, setGameIsSaved] = React.useState(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const storedUser = JSON?.parse(localStorage?.getItem("user"));
        setCurrentUser(storedUser);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("user", JSON?.stringify(currentUser));
    }, [
        currentUser
    ]);
    const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            currentUser,
            setCurrentUser
        }), [
        currentUser,
        setCurrentUser
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;
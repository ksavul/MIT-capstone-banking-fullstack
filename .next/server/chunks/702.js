"use strict";
exports.id = 702;
exports.ids = [702];
exports.modules = {

/***/ 5702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ userActions)
});

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./helpers/fetchHandler.jsx

const fetchHandler = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE")
};
function request(method) {
    return async (url, body)=>{
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers["Content-Type"] = "application/json";
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    };
}
// helper functions
function authHeader(url) {
    // return auth header with jwt if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = user?.token;
    if (isLoggedIn) {
        return {
            Authorization: `Bearer ${user.token}`
        };
    } else {
        return {};
    }
}
async function handleResponse(response) {
    const isJson = response.headers?.get("content-type")?.includes("application/json");
    console.log("response :", response);
    const data = isJson ? await response.json() : null;
    console.log("data :", data);
    const user = JSON.parse(localStorage.getItem("user"));
    // check for error response
    if (!response.ok) {
        if ([
            401,
            403
        ].includes(response.status) && user?.token) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            userActions.logout();
        }
        // get error message from body or default to response status
        const error = data && data.message || response.statusText;
        return Promise.reject(error);
    }
    return data;
}

;// CONCATENATED MODULE: ./helpers/front/userActions.jsx
// import { BehaviorSubject } from 'rxjs';



// import { fetchHandler } from 'helpers';
// import { alertService } from './alert.service';
// const { publicRuntimeConfig } = getConfig();
// const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const baseUrl = "/api";
// const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')));
const userActions = {
    // user: userSubject.asObservable(),
    // get userValue() { return userSubject.value },
    login,
    getCurrentUser,
    logout,
    register,
    updateBalance,
    getAll,
    getBankAccounts,
    createBankAccount
};
async function getCurrentUser() {
    return await JSON.parse(localStorage.getItem("user"));
}
async function login({ email, password }) {
    const user = await fetchHandler.post(`${baseUrl}/account/login`, {
        email,
        password
    });
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    // userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}
function logout() {
    // alertService.clear();
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem("user");
// userSubject.next(null);
// Router.push('/account/login');
}
async function register(user) {
    await fetchHandler.post(`${baseUrl}/account/register`, user);
}
async function updateBalance({ email, amount }) {
    return await fetchHandler.post(`${baseUrl}/updateBalance`, {
        email,
        amount: parseFloat(amount)
    });
}
async function getAll() {
    return await fetchHandler.get(`${baseUrl}/account/all`);
}
async function getBankAccounts({ email }) {
    return await fetchHandler.post(`${baseUrl}/bankAccounts/get`, {
        email
    });
}
async function createBankAccount({ email, accountName }) {
    return await fetchHandler.post(`${baseUrl}/bankAccounts/createAccount`, {
        email,
        accountName
    });
} // async function getById(id) {
 //     return await fetchHandler.get(`${baseUrl}/${id}`);
 // }
 // async function update(id, params) {
 //     await fetchHandler.put(`${baseUrl}/${id}`, params);
 //     // update stored user if the logged in user updated their own record
 //     if (id === userSubject.value.id) {
 //         // update local storage
 //         const user = { ...userSubject.value, ...params };
 //         localStorage.setItem('user', JSON.stringify(user));
 //         // publish updated user to subscribers
 //         userSubject.next(user);
 //     }
 // }
 // // prefixed with underscored because delete is a reserved word in javascript
 // async function _delete(id) {
 //     await fetchHandler.delete(`${baseUrl}/${id}`);
 //     // auto logout if the logged in user deleted their own record
 //     if (id === userSubject.value.id) {
 //         logout();
 //     }
 // }


/***/ })

};
;
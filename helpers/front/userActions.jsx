// import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchHandler } from '../fetchHandler';
// import { fetchHandler } from 'helpers';
// import { alertService } from './alert.service';

// const { publicRuntimeConfig } = getConfig();
// const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const baseUrl = '/api';

// const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')));

export const userActions = {
    // user: userSubject.asObservable(),
    // get userValue() { return userSubject.value },
    login,
    getCurrentUser,
    logout,
    register,
    updateBalance,
    getAll,
    getBankAccounts,
    createBankAccount,
    // getById,
    // update,
    // delete: _delete
};

async function getCurrentUser() {
  return await JSON.parse(localStorage.getItem('user'));
}

async function login({email, password}) {
    const user = await fetchHandler.post(`${baseUrl}/account/login`, { email, password });

    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    // userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function logout() {
    // alertService.clear();
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    // userSubject.next(null);
    // Router.push('/account/login');
}

async function register(user) {
    await fetchHandler.post(`${baseUrl}/account/register`, user);
}

async function updateBalance({email, amount}) {
    return await fetchHandler.post(`${baseUrl}/updateBalance`, {email, amount: parseFloat(amount)})

}

async function getAll() {
    return await fetchHandler.get(`${baseUrl}/account/all`);
}

async function getBankAccounts({email}) {
    return await fetchHandler.post(`${baseUrl}/bankAccounts/get`, {email})
}

async function createBankAccount({email, accountName}) {
    return await fetchHandler.post(`${baseUrl}/bankAccounts/createAccount`, {email, accountName})
}


// async function getById(id) {
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

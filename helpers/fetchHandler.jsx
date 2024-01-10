import { userActions } from "./front/userActions";

export const fetchHandler = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return async (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in
    const user = JSON.parse(localStorage.getItem('user'))

    const isLoggedIn = user?.token;
    if (isLoggedIn) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    console.log('response :', response)
    const data = isJson ? await response.json() : null;
    console.log('data :', data);

    const user = JSON.parse(localStorage.getItem('user'))
    // check for error response
    if (!response.ok) {
        if ([401, 403].includes(response.status) && user?.token) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            userActions.logout();
        }

        // get error message from body or default to response status
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

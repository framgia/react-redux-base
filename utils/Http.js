import axios from 'axios'
import systemConfig from './../config'
import { getCookie, setCookie } from './cookie'
import createStore from './../store';
import {reReqLoginAuth, recLoginAuth} from './../modules/auth/actions';

const DEFAULT_CONFIG = {
    baseURL: systemConfig.API_URL,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": 'XMLHttpRequest'
    },
    // enable credentials to send cookie to server.
    //withCredentials: true,
};

export const statusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

export default class Http {
    constructor(config = {}) {
        this.config = Object.assign({}, DEFAULT_CONFIG, config)
    }

    authenticated() {
        const storedData = getCookie("token");
        if (storedData) {
            this.config.headers.Authorization = `${systemConfig.auth.token_type} ${storedData}`;
        }

        return this;
    }

    get(url, params, config = {}) {
        return this.executeRequest(url, { ...config, params })
    }

    post(url, data, config = {}) {
        return this.executeRequest(url, { method: 'post',...config, data })
    }
    
    patch(url, data, config = {}) {
        return this.executeRequest(url, { method: 'patch', ...config, data })
    }

    delete(url, data, config = {}) {
        return this.executeRequest(url, { method: 'delete', ...config, data })
    }

    executeRequest(url, config) {
        const store = createStore();
        const finalHeaderConfig = { ...this.config.headers, ...config.headers }
        const finalConfig = { ...this.config, url, ...config, headers: { ...finalHeaderConfig } }

        return axios.request(finalConfig)
            .then(response => {
                if (response.headers.authorization) {
                    let token = response.headers.authorization;
                    setCookie('token', token);
                    store.dispatch(reReqLoginAuth(token));
                }

                return Promise.resolve(response)
            })
            .catch(error => {
                if (error.response.status == statusCode.UNAUTHORIZED) {
                    removeCookie('token');
                    window.location.href = "/auth/login"
                }

                return Promise.reject(error)
            })
    }
}

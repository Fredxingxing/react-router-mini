import { parsePath } from './utils';

let location = getLocation();

function getLocation() {
    const { pathname, search, hash } = window.location;
    return Object.freeze({
        pathname, search, hash, state: null,
    });
}

function getNextLocation(to, state = null) {
    return Object.freeze({
        ...parsePath(to),
        state
    })
}

function push(to, state) {
    location = getNextLocation(to, state);
    window.history.pushState(state, '', to);
    listeners.forEach(fn => fn(location));
}

let listeners = [];

function listen(fn) {
    listeners.push(fn);
    return function () {
        listeners = listeners.filter(listener => listener !== fn);
    };
}

// 用于处理浏览器前进后退操作
window.addEventListener('popstate', () => {
    location = getLocation();
    listeners.forEach(fn => fn(location));
});

function Location() {
    return location;
}

export const history = {
    Location,
    location,
    push,
    listen,
};

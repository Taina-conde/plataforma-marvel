export const SET_LOGGED = 'SET_LOGGED';

export function setLogged(loggedIn) {
    return {
        type: SET_LOGGED,
        loggedIn

    }
} 
export const TOGGLE_LOGGED = 'TOGGLE_LOGGED';

export function toggleLogged(isLogged) {
    return {
        type: TOGGLE_LOGGED,
        isLogged
    }
} 
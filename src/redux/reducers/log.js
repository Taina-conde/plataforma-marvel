import { SET_LOGGED } from '../actions/log';

export default function logReducer( state = false, action) {
    switch (action.type) {
        case SET_LOGGED:
            return action.loggedIn
        default:
            return state
    }
}
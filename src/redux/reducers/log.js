import { TOGGLE_LOGGED } from '../actions/log';

export default function logReducer( state = false, action) {
    switch (action.type) {
        case TOGGLE_LOGGED:
            return !state
        default:
            return state
    }
}
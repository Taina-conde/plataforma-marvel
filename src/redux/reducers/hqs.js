import { RECEIVE_HQS } from '../actions/hqs';

export default function hqsReducer( state = {}, action) {
    switch (action.type){
        case RECEIVE_HQS:
            return {
                ...state,
                ...action.hqs
            }
        default:
            return state
    }
}
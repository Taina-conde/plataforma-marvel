import { RECEIVE_PERSONAGENS } from '../actions/personagens';

export default function personagensReducer( state = {}, action) {
    switch (action.type){
        case RECEIVE_PERSONAGENS:
            return {
                ...state,
                ...action.personagens
            }
        default:
            return state
    }
}
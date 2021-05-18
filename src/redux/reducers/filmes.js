import { RECEIVE_FILMES } from '../actions/filmes';

export default function filmesReducer( state = {}, action) {
    switch (action.type){
        case RECEIVE_FILMES:
            return {
                ...state,
                ...action.personagens
            }
        default:
            return state
    }
}
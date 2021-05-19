import { SELECT_CARD} from '../actions/selectedCard';

export default function selectedCardReducer( state = {}, action) {
    switch (action.type){
        case SELECT_CARD:
            return {
                ...state,
                card: {...action.card},
                category: action.category
            }
        default:
            return state
    }
}
export const SELECT_CARD = 'SELECT_CARD';

export function selectCard(category, card) {
    return {
        type: SELECT_CARD,
        card
    }
}
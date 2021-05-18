export const RECEIVE_PERSONAGENS = "RECEIVE_PERSONAGENS";

export function handleReceivePersonagens(personagens) {
  return (dispatch) => {
    localStorage.setItem("personagens", personagens);
    dispatch(receivePersonagens(personagens));
  };
}
function receivePersonagens(personagens) {
  return {
    type: RECEIVE_PERSONAGENS,
    personagens,
  };
}

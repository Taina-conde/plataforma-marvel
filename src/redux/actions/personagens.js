export const RECEIVE_PERSONAGENS = "RECEIVE_PERSONAGENS";

export function handleReceivePersonagens(personagens) {
  return (dispatch) => {
    return localStorage
      .setItem("personagens", personagens)
      .then(() => {
        dispatch(receivePersonagens(personagens));
      });
  };
}
function receivePersonagens(personagens) {
  return {
    type: RECEIVE_PERSONAGENS,
    personagens,
  };
}

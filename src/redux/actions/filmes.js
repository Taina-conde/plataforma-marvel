export const RECEIVE_FILMES = "RECEIVE_FILMES";

export function handleReceiveFilmes(filmes) {
  return (dispatch) => {
    return localStorage
      .setItem("filmes", filmes)
      .then(() => {
        dispatch(receiveFilmes(filmes));
      });
  };
}
function receiveFilmes(filmes) {
  return {
    type: RECEIVE_FILMES,
    filmes,
  };
}
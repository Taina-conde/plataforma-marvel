export const RECEIVE_FILMES = "RECEIVE_FILMES";

export function handleReceiveFilmes(filmes) {
  return (dispatch) => {
    localStorage.setItem("filmes", filmes);
    dispatch(receiveFilmes(filmes));
    return;
  };
}
function receiveFilmes(filmes) {
  return {
    type: RECEIVE_FILMES,
    filmes,
  };
}

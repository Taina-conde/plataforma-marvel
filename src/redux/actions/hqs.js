export const RECEIVE_HQS = "RECEIVE_HQS";

export function handleReceiveHqs(hqs) {
  return (dispatch) => {
    return localStorage
      .setItem("hqs", hqs)
      .then(() => {
        dispatch(receiveHqs(hqs));
      });
  };
}
function receiveHqs(hqs) {
  return {
    type: RECEIVE_HQS,
    hqs,
  };
}
export const RECEIVE_HQS = "RECEIVE_HQS";

export function handleReceiveHqs(hqs) {
  return (dispatch) => {
    localStorage.setItem("hqs", hqs);
    dispatch(receiveHqs(hqs));
    return;
  };
}
function receiveHqs(hqs) {
  return {
    type: RECEIVE_HQS,
    hqs,
  };
}

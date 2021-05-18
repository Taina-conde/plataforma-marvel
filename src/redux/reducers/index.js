import { combineReducers } from "redux";
import personagensReducer from "./personagens";
import filmesReducer from "./filmes";
import hqsReducer from "./hqs";
import logReducer from "./log";

export default combineReducers({
  personagens: personagensReducer,
  filmes: filmesReducer,
  hqs: hqsReducer,
  logged: logReducer
});

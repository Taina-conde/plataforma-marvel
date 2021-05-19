import { useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonagensView from "./PersonagensView";
import FilmesView from "./FilmesView";
import HqsView from "./HqsView";
import data from "../../utils/data";
import { handleReceivePersonagens } from "../../redux/actions/personagens";
import { handleReceiveFilmes } from "../../redux/actions/filmes";
import { handleReceiveHqs } from "../../redux/actions/hqs";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleReceiveFilmes(data.filmes));
    dispatch(handleReceiveHqs(data.HQs));
    dispatch(handleReceivePersonagens(data.personagens));
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PersonagensView} />
        <Route path="/filmes" component={FilmesView} />
        <Route path="/hqs" component={HqsView} />
      </Switch>
    </Router>
  );
}

export default App;

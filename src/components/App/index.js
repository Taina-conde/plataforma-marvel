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
import { useDispatch, useSelector } from "react-redux";
import LogInView from "./LogInView";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleReceiveFilmes(data.filmes));
    dispatch(handleReceiveHqs(data.HQs));
    dispatch(handleReceivePersonagens(data.personagens));
  }, [dispatch]);
  return (
    <Router>
      {loggedIn ? (
        <>
          <Navbar />
          <Switch>
            <Route path="/personagens" component={PersonagensView} />
            <Route path="/filmes" component={FilmesView} />
            <Route path="/hqs" component={HqsView} />
          </Switch>
        </>
      ) : (
        <Route path="/" exact component={LogInView} />
      )}
      
    </Router>
  );
}

export default App;

import { useEffect } from "react";
import { useSelector } from "react-redux";
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
import LogInView from "./LogInView";
import { setLogged } from "../../redux/actions/log";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const rememberMe = localStorage.getItem("rememberMe") === "true";

  console.log("loggedIn", loggedIn);
  console.log("rememberMe", rememberMe)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleReceiveFilmes(data.filmes));
    dispatch(handleReceiveHqs(data.HQs));
    dispatch(handleReceivePersonagens(data.personagens));
    dispatch(setLogged(rememberMe))
  }, [dispatch]);

  return (
    <Router>
      {(loggedIn || rememberMe) ? (
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={PersonagensView} />
            <Route path="/filmes" component={FilmesView} />
            <Route path="/hqs" component={HqsView} />
          </Switch>
        </>
      ) : (
        <LogInView />
      )}
    </Router>
  );
}

export default App;

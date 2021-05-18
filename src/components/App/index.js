import { useEffect } from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PersonagensView from './PersonagensView';
import FilmesView from './FilmesView';
import HqsView from './HqsView';
import data from '../../utils/data';
import { handleReceivePersonagens } from '../../redux/actions/personagens';
import { handleReceiveFilmes } from '../../redux/actions/filmes';
import { handleReceiveHqs } from '../../redux/actions/hqs';

function App() {
  useEffect(()=> {

  }, [])
  return (
    <Router>
      <Navbar/>
      <Route path = '/' exact component = {PersonagensView}/>
      <Route path = '/filmes' component = {FilmesView}/> 
      <Route path = '/hqs' component = {HqsView}/>
      
    </Router>
    
  );
}

export default App;

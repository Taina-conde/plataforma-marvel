import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PersonagensView from './PersonagensView';
import FilmesView from './FilmesView';
import HqsView from './HqsView';


function App() {
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

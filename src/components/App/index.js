import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PersonagensView from './PersonagensView';


function App() {
  return (
    <Router>
      <Navbar/>
      <PersonagensView/>
    </Router>
    
  );
}

export default App;

import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './components/pages/Inicio';
import { Menu } from './components/pages/Menu';
import { Nosotros } from './components/pages/Nosotros';
import { Reservaciones } from './components/pages/Reservaciones';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
 
      <div className = 'container'>
          <Header /> 
          <Switch>      
              <Route path="/pages/Reservaciones">
                <Reservaciones />
              </Route>
              <Route path="/pages/Nosotros">
                <Nosotros />
              </Route>   
              <Route path="/pages/Menu">
                <Menu />
              </Route>    
              <Route path="/" exact>
                <Inicio />
              </Route>
          </Switch>
          <Footer />
      </div>

     
    </Router>
  );
}



export default App;

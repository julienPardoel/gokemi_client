import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from './pages/Home';
import Profil from './pages/Profil';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profil" exact component={Profil} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

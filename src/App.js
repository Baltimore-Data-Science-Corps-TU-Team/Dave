// import './App.css';
// import Leaflet from './components/leaflet'
import Kepler from './components/Kepler'
//import Home from './Home'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function App() {

  return (
    <Router>
        <Switch>
          {/* <Route path="/" exact component={Leaflet} /> */}
          <Route path="/" exact component={Kepler} />
          {/* render={(props) =>(<Kepler {...props} />)}/> */}
          {/* <Route path="/leaflet"
            render={(props) => (
              <Leaflet />
            )}
          /> */}
        </Switch>
    </Router>
  )
}
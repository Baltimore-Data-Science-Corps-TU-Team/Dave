import Kepler from './components/Kepler'
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route path="/kepler-app" component={Kepler} />    
    </Router>
  )
}
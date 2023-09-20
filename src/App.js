import './App.css'

import {Route, Switch} from 'react-router-dom'
import Teammatches from './components/TeamMatches'
import Home from './components/Home'
import Notfond from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={Teammatches} />
      <Route exact path="/random-path" component={Notfond} />
    </Switch>
  </>
)

export default App

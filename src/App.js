import './App.css'
import {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Teammatches from './components/TeamMatches'
import Home from './components/Home'

const App = () => (
  <>
    <Home />
    <Switch>
      <Route path="/team-matches/:id" component={Teammatches} />
    </Switch>
  </>
)

export default App

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Timeline from './Pages/Timeline';
import Login from './Pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Calendar from './../../features/Calendar/Calendar';
import Event from './../../features/Event/Event';
import './style.css';




function App() {
  return (
    <Switch>
        <Route path="/calendar" component={Calendar} />
        <Route path="/event" component={Event} />
        <Route path="/" component={Calendar} />
    </Switch>
  );
}

export default App;

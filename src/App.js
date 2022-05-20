import './App.css';
import Login from './pages/login';
import { Switch } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Employees from './pages/employees';
import Histories from './pages/histories';
import Leaves from './pages/leaves';
import Apply from './pages/apply';
import { PrivateLoginRoute, PrivateRoute } from './components/privateRoute';
function App() {
  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/apply">
        <Apply/>
      </PrivateRoute>
      <PrivateRoute path="/leaves">
        <Leaves/>
      </PrivateRoute>
      <PrivateRoute path="/employees">
        <Employees/>
      </PrivateRoute>
      <PrivateRoute path="/histories">
        <Histories/>
      </PrivateRoute>
      <PrivateLoginRoute path="/login">
        <Login />
      </PrivateLoginRoute>
    </Switch>
  );
}

export default App;

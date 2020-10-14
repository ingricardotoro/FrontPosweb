import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Context
import AlertaState from './Context/alertas/alertaState';
import AuthState from './Context/autenticacion/authState';
import EmpleadoState from './Context/empleados/empleadoState';

//Pages 
import Home from 'Pages/Home';
import PanelAdmin from 'Pages/PanelAdmin';

function App() {
  return (
    <>
    <EmpleadoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/admin" component={PanelAdmin}/>
            </Switch>
          </Router>  
        </AuthState>
      </AlertaState>
    </EmpleadoState>
    </>
  );
}

export default App;

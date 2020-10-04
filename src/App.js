import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Pages 
import Home from 'Pages/Home';
import PanelAdmin from 'Pages/PanelAdmin';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/panel-admin" component={PanelAdmin}/>
        </Switch>
      </Router>  
      
    </>
  );
}

export default App;

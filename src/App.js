import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Pages 
import Home from 'pages/Home';
import PanelAdmin from 'pages/PanelAdmin';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/panel-admin" component={PanelAdmin} />
      </Router>  
    </>
  );
}

export default App;

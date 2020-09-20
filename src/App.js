import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PanelAdmin from './pages/PanelAdmin/PanelAdmin';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={PanelAdmin}/>
      </Router>
    </div>
  );
}

export default App;



import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Tab1 from './pages/Tab1';
import Table from './pages/Table';
import Swipe from './pages/Swipe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Page1}/>
      <Route path="/page2/:param" component={Page2}/>
      <Route path="/table" component={Table}/>
      <Route path="/tab1" component={Tab1}/>
      <Route path="/Swipe" component={Swipe}/>
      </Switch>
    </Router>
  );
}

export default App;

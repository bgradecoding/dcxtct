import React from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Tab1 from './pages/Tab1';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Page1}/>
      <Route path="/page2" component={Page2}/>
      <Route path="/tab1" component={Tab1}/>
      </Switch>
    </Router>
  );
}

export default App;

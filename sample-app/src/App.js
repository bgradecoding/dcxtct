import React from 'react';
import page1 from './pages/page1';
import page2 from './pages/page2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={page1}/>
      <Route path="/page2" component={page2}/>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import { Switch, Router, Route } from 'react-router';
//import { HashRouter, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import About from './pages/About';
import Summary from './pages/Summary';

const hashHistory = createHashHistory();

const Apple = ({ onClick }) => <div onClick={onClick}>apple is red</div>;

const Box = ({ onClick }) => (
  <div className='apple'>
    <Apple onClick={onClick} />
  </div>
);

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const click = e => {
    console.log(e);
  };

  return (
    <div className='App'>
      <Box onClick={click} />
      <button onClick={() => setVisible(visible => !visible)}>who am I?</button>
      <Router history={hashHistory}>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/summary' exact component={Summary} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

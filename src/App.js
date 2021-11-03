import './App.css';
import React, { useEffect } from 'react';
import { Switch, Router, Route } from 'react-router';
import { createHashHistory } from 'history';
import lazyLoad from './hoc/lazyLoad';

const createHistory = () => {
  const hashHistory = createHashHistory();

  const listen = hashHistory.listen;

  hashHistory.listen = function (cb) {
    if (cb && typeof cb === 'function') {
      cb();
      listen.call(this, cb);
    }
  };

  return hashHistory;
};

const history = createHistory();

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const click = e => {
    console.log(e);
  };
  useEffect(() => {
    console.log('app');
  }, []);

  useEffect(() => {
    history.listen(() => {
      setTimeout(() => {
        console.log('history change');
      });
    });
  }, []);

  return (
    <div className='App'>
      <Router
        history={history}
        children={
          <Switch>
            <Route
              path='/'
              exact
              component={lazyLoad(() => import(/* webpackChunkName:'p_about' */ './pages/About'))}
            />
            <Route
              path='/summary'
              exact
              component={lazyLoad(() => import(/* webpackChunkName:'p_summary' */ './pages/Summary'))}
            />
            <Route
              path='/todo'
              exact
              component={lazyLoad(() => import(/* webpackChunkName:'p_todo' */ './pages/Todo'))}
            />
            <Route
              path='/author'
              exact
              component={lazyLoad(() => import(/* webpackChunkName:'p_author' */ './pages/Author'))}
            />
          </Switch>
        }
      />
    </div>
  );
};

export default App;

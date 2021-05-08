import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/index';
import Upload from './containers/upload';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import reportWebVitals from './reportWebVitals';
import configureStore, { history } from './configureStore';
const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* place ConnectedRouter under Provider */}
      <>
        {/* your usual react-router v4/v5 routing */}
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/upload' component={Upload} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

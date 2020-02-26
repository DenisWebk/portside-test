import React from "react";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from "./components/UserProfile";
import store from './store';
import { Provider } from 'react-redux'
function App() {
  return (
      <Provider store={store}>
      <Router >
          <Switch>
              <Route exact path={'/'} component={UserList} />
              <Route exact path={'/user/:userID'} component={UserProfile} />
          </Switch>
      </Router>
      </Provider>
  );
}

export default App;

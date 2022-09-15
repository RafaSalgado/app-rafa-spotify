import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Main from './albums/pages/Main';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {   
  let routes = (   
      <Switch>        
      <Route path="/album">
        <Main />
      </Route>
      <Redirect to="/album" />
    </Switch>
    );
  
  return (
    <AuthContext.Provider
      value={{     
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

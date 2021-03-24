import React, { Component, Fragment, lazy, Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";
import './App.css';
const Landing = lazy(() => import('../src/component/Landing'))

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Suspense fallback={<></>}>
            <Switch>
              <Route exact path="/" component={Landing}></Route>  
            </Switch>
          </Suspense>
        </Router>
      </>
    );
  }
}

export default App;

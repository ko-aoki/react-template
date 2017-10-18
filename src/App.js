import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import  reducer from './reducers'
import VisibleSecurityTaskChoice from './containers/VisibleSecurityTaskChoice'
import VisibleSecurityCheckList from './containers/VisibleSecurityCheckList'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <Router>
                  <div>
                      <Route path='/top' component={VisibleSecurityTaskChoice} />
                      <Route path='/checkList' component={VisibleSecurityCheckList} />
                  </div>
              </Router>
          </div>
        </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import reducer from './reducers'
import VisibleTaskChoice from './containers/VisibleTaskChoice'
import VisibleCheckList from './containers/VisibleCheckList'

import './App.css';

const store = createStore(reducer)

class App extends Component {
  render() {
      console.log(store.getState())
    return (
        <Provider store={store}>
          <div className="App">
              <Router>
                  <div>
                      <Navbar inverse collapseOnSelect>
                          <Navbar.Header>
                              <Navbar.Brand>
                                  <a href="#">トップページ</a>
                              </Navbar.Brand>
                              <Navbar.Toggle />
                          </Navbar.Header>
                          <Navbar.Collapse>
                              <Nav>
                                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                      <MenuItem eventKey={3.1}>トップへ</MenuItem>
                                      <MenuItem eventKey={3.2}>ログアウト</MenuItem>
                                  </NavDropdown>
                              </Nav>
                          </Navbar.Collapse>
                      </Navbar>
                      <Route exact path="/" component={VisibleTaskChoice} />
                      <Route path="/checkList" component={VisibleCheckList} />
                  </div>
              </Router>
          </div>
        </Provider>
    );
  }
}

export default App;

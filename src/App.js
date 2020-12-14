import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
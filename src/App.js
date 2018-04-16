import React, { Component } from 'react';
import NavBar from './components/NavBar';
import OptionsDrawer from './components/OptionsDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <OptionsDrawer />
      </div>
    );
  }
}

export default App;

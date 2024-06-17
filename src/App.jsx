import React, { Component } from 'react';
import "./App.css"
import Bome from './pages/home/Bome'
import Sidebar from './components/sidebar/sidebar'
import FeaturedInfo from './components/featuredInfo/FeaturedInfo'


class App extends Component {
  render() {
    return (
      <div>
          <div className="container">
            {/* <Sidebar /> */}
            <Bome />
          </div>
      </div>
    );
  }
}

export default App;

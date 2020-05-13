import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import HocDemo from './components/HocDemo'
import Todos from './components/Todos'
import Post from './components/Post'
import './index.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="react-app container">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hoc" component={HocDemo} />
            <Route path="/todo" component={Todos} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
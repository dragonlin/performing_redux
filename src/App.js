import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import RedditPosts from './RedditPosts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RedditPosts />
      </Provider>
    );
  }
}

export default App;

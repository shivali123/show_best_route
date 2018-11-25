import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Route} from './app/config/route'
import rootReducer from './app/reducers'
const store = createStore(rootReducer)

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

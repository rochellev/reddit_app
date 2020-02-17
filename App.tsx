import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { history, store } from './data/bootstrap';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router'
import {FrontScreen} from "./frontPage/screen";

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={FrontScreen} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

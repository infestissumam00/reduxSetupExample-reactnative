/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './js/store';
import AppContainer from './js/containers/AppContainer'

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        )
    }
}



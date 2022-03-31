import { registerRootComponent } from 'expo';

import App from './App';
import {createStore} from 'redux';
import AddRecord from './reducer/Add_record';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

export const store=createStore(AddRecord)
registerRootComponent(App);

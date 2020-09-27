/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {name as appName} from './app.json';
import "./icons";

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });

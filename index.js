/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
// import App from './App';
import AppContainer from "./src/index";
import { name as appName } from "./app.json";

class MyApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent(appName, () => MyApp);

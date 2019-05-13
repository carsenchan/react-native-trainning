import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Calculator from "./components/calculator";

import task1 from "./functions/task1";
import task2 from "./functions/task2";

class HomeScreen extends Component {
  componentDidMount() {
    task1("Brown fox jumped, over brown fox!");
    const inputParam1 = 9;
    // eslint-disable-next-line prettier/prettier
    const inputParam2 = ["1 2", "1 4", "3 4", "3 6", "5 7"];
    task2(inputParam1, inputParam2);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#5870e2" }}>
        <View style={[styles.container]}>
          <Text> textInComponent </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5870e2"
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Calculator
});

export default createAppContainer(TabNavigator);

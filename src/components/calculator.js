import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";

export default class Calculator extends Component {
  state = {
    normalRadius: 0
  };

  updateNormailRadius = value => {
    this.setState({ normalRadius: value });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            flexDirection: "column-reverse",
            alignItems: "flex-end"
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>45</Text>
        </View>
        <View style={{ flex: 4, marginTop: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "black",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              text={"C"}
              normalStyle={stylesSymbol.container}
              onPressStyle={stylesSymbol.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"C"}
              normalStyle={stylesSymbol.container}
              onPressStyle={stylesSymbol.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"%"}
              normalStyle={stylesSymbol.container}
              onPressStyle={stylesSymbol.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"%"}
              normalStyle={stylesOperator.container}
              onPressStyle={stylesOperator.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "black",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              text={"7"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"8"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"9"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"X"}
              normalStyle={stylesOperator.container}
              onPressStyle={stylesOperator.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "black",
              width: "100%"
            }}
          >
            <Button
              text={"4"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"5"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"6"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"-"}
              normalStyle={stylesOperator.container}
              onPressStyle={stylesOperator.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "black",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              text={"1"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"2"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"3"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"+"}
              normalStyle={stylesOperator.container}
              onPressStyle={stylesOperator.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "black",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Button
              text={"0"}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              isZero={true}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"."}
              normalStyle={stylesNumber.container}
              onPressStyle={stylesNumber.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
            <Button
              text={"="}
              normalStyle={stylesOperator.container}
              onPressStyle={stylesOperator.onPress}
              normalRadius={this.state.normalRadius}
              updateNormailRadius={this.updateNormailRadius}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});

const Button = ({
  text,
  isZero,
  normalStyle,
  onPressStyle,
  normalRadius,
  updateNormailRadius
}) => {
  const [isPress, setIsPress] = useState(false);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const layoutEnvet = ({ nativeEvent }) => {
    setLayoutWidth(nativeEvent.layout.width);
    if (!isZero) updateNormailRadius(nativeEvent.layout.width / 2);
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
    >
      <View
        style={[
          normalStyle,
          {
            height: normalRadius * 2,
            borderRadius: layoutWidth / 2
          },
          isZero ? { width: "42.5%", height: normalRadius * 2 } : {},
          isPress ? onPressStyle : null
        ]}
        onLayout={layoutEnvet}
      >
        <Text>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const stylesNumber = StyleSheet.create({
  container: {
    margin: "1.25%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#575756",
    color: "white",
    backgroundColor: "#575756"
  },
  onPress: {
    backgroundColor: "#898989"
  }
});

const stylesOperator = StyleSheet.create({
  container: {
    margin: "1.25%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    color: "white",
    backgroundColor: "#f39200"
  },
  onPress: {
    backgroundColor: "#f7bd66"
  }
});

const stylesSymbol = StyleSheet.create({
  container: {
    margin: "1.25%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    color: "white",
    backgroundColor: "#808080"
  },
  onPress: {
    backgroundColor: "#b2b2b2"
  }
});

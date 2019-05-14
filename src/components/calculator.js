import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView
} from "react-native";

const calculatorKeys = [
  [
    {
      text: "C",
      keyType: "symbol",
      isZero: false
    },
    {
      text: "+/-",
      keyType: "symbol",
      isZero: false
    },
    {
      text: "%",
      keyType: "symbol",
      isZero: false
    },
    {
      text: "÷",
      keyType: "operator",
      isZero: false
    }
  ],
  [
    {
      text: "7",
      keyType: "number",
      isZero: false
    },
    {
      text: "8",
      keyType: "number",
      isZero: false
    },
    {
      text: "9",
      keyType: "number",
      isZero: false
    },
    {
      text: "X",
      keyType: "operator",
      isZero: false
    }
  ],
  [
    {
      text: "4",
      keyType: "number",
      isZero: false
    },
    {
      text: "5",
      keyType: "number",
      isZero: false
    },
    {
      text: "6",
      keyType: "number",
      isZero: false
    },
    {
      text: "-",
      keyType: "operator",
      isZero: false
    }
  ],
  [
    {
      text: "1",
      keyType: "number",
      isZero: false
    },
    {
      text: "2",
      keyType: "number",
      isZero: false
    },
    {
      text: "3",
      keyType: "number",
      isZero: false
    },
    {
      text: "+",
      keyType: "operator",
      isZero: false
    }
  ],
  [
    {
      text: "0",
      keyType: "number",
      isZero: true
    },
    {
      text: ".",
      keyType: "number",
      isZero: false
    },
    {
      text: "=",
      keyType: "operator",
      isZero: false
    }
  ]
];

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
          {calculatorKeys.map((keys, index) => {
            return <Row keys={keys} key={`row-${index}`} />;
          })}
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

const Row = ({ keys }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "black",
        justifyContent: "space-between",
        width: "100%"
      }}
    >
      {keys.map((key, index) => (
        <Button
          text={key.text}
          isZero={key.isZero}
          keyType={key.keyType}
          key={`${key.text}-${index}`}
        />
      ))}
    </View>
  );
};

const Button = ({ text, isZero, keyType }) => {
  const [isPress, setIsPress] = useState(false);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const layoutEnvet = ({ nativeEvent }) => {
    setLayoutWidth(nativeEvent.layout.width);
    // if (!isZero) updateNormailRadius(nativeEvent.layout.width / 2);
  };
  const buttonStyle = () => {
    switch (keyType) {
      case "symbol":
        return {
          normalStyle: stylesSymbol.container,
          onPressStyle: stylesSymbol.onPress
        };
      case "operator":
        return {
          normalStyle: stylesOperator.container,
          onPressStyle: stylesOperator.onPress
        };
      case "number":
        return {
          normalStyle: stylesNumber.container,
          onPressStyle: stylesNumber.onPress
        };
    }
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
    >
      <View
        style={[
          styleButton.container,
          buttonStyle().normalStyle,
          {
            borderRadius: layoutWidth / 2
          },
          isZero
            ? {
                width: "42.5%",
                height: layoutWidth / 2
              }
            : { height: layoutWidth },
          isPress ? buttonStyle().onPressStyle : null
        ]}
        onLayout={layoutEnvet}
      >
        <Text
          style={[
            styleButton.text,
            { fontSize: isZero ? layoutWidth / 8 : layoutWidth / 4 }
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styleButton = StyleSheet.create({
  container: {
    margin: "1.25%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#575756"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});

const stylesNumber = StyleSheet.create({
  container: {
    backgroundColor: "#575756"
  },
  onPress: {
    backgroundColor: "#898989"
  }
});

const stylesOperator = StyleSheet.create({
  container: {
    backgroundColor: "#f39200"
  },
  onPress: {
    backgroundColor: "#f7bd66"
  }
});

const stylesSymbol = StyleSheet.create({
  container: {
    backgroundColor: "#808080"
  },
  onPress: {
    backgroundColor: "#b2b2b2"
  }
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

const TallyDigit = ({ value }) => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.digit}>
        <Text style={styles.text}>{value}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  digit: {
    width: 64,
    height: 128,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5
  },
  text: {
    fontFamily: "Montserrat-Regular",
    fontSize: 72
  }
});

export default TallyDigit;

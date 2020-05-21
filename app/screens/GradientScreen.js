import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ThemeContext from "../contexts/Theme";

const GradientScreen = ({ children, navigation }) => {
  const theme = useContext(ThemeContext);
  const onPress = () => navigation.navigate("routeLightScreen");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.primaryColor, theme.secondaryColor]}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.1, 0.5]}
        style={styles.gradientStyle}
      />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>GO TO LIST</Text>
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientStyle: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    elevation: 10,
    backgroundColor: "#FFFFFF"
  },
  button: {
    flex: 1,
    margin: 100,
    alignSelf: "center",
    alignItems: "center"
  }
});

export default GradientScreen;

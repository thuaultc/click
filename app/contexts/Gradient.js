import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ThemeContext from "./Theme";

const Gradient = ({children}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.primaryColor, theme.secondaryColor]}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.1, 0.5]}
        style={styles.gradientStyle}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradientStyle: {
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});

export default Gradient;

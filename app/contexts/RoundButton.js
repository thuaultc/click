import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ThemeContext from "./Theme";

function usePageStylesheet() {
  return StyleSheet.create({
    gradientStyle: {
      flex: 1
    },
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    container: {
      elevation: 10,
      width: 64,
      height: 64,
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      overflow: "hidden"
    }
  });
}

const RoundButton = ({ children, onPress }) => {
  const stylesheet = usePageStylesheet();
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity style={stylesheet.container} onPress={onPress}>
      <LinearGradient
        colors={[theme.primaryButtonColor, theme.secondaryButtonColor]}
        start={[0, 0]}
        end={[0.5, 0.5]}
        locations={[0, 1]}
        style={stylesheet.gradientStyle}
      >
        <View style={stylesheet.view}>{children}</View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default RoundButton;

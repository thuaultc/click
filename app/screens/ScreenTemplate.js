import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import ThemeContext from "../contexts/Theme";
import Header from "../contexts/Header";
import Gradient from "../contexts/Gradient";

function usePageStylesheet() {
  const theme = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1
    },
    focus: {
      height: 320,
      elevation: 10
    },
    background: {
      flexGrow: 1,
      backgroundColor: theme.backgroundColor,
      margin: 32
    }
  });
}

const ScreenTemplate = ({ children, children2 }) => {
  const stylesheet = usePageStylesheet();

  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.focus}>
        <Gradient>
          <Header />
          {children}
        </Gradient>
      </View>
      <View style={stylesheet.background}>
        {children2}
      </View>
    </View>
  );
};

export default ScreenTemplate;

import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import ThemeContext from "./Theme";

function usePageStylesheet(theme) {
  return StyleSheet.create({
    gradientStyle: {
      height: 48,
      width: 382,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    },
    view: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      height: "100%",
      width: "100%"
    },
    container: {
      flex: 1
    },
    buttonText: {
      textAlign: "center",
      color: theme.textColor,
      fontFamily: "Montserrat-Regular",
      fontSize: 18
    }
  });
}

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const stylesheet = usePageStylesheet(theme);
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf")
  });

  const onPress = () => console.log("test");

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={stylesheet.container}>
        <LinearGradient
          colors={[theme.primaryColor, theme.secondaryColor]}
          start={[0, 0.8]}
          end={[0.9, 0.2]}
          locations={[0, 1]}
          style={stylesheet.gradientStyle}
        >
          <TouchableOpacity style={stylesheet.view} onPress={onPress}>
            <Text style={stylesheet.buttonText}>{children}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
};

export default Button;

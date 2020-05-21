import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import ThemeContext from "./Theme";

function usePageStylesheet() {
  return StyleSheet.create({
    gradientStyle: {
      height: 48
    },
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    container: {
      flex: 1
    },
    buttonText: {
      textAlign: "center",
      color: "black",
      width: 382,
      fontFamily: "Montserrat-Regular",
      fontSize: 18
    }
  });
}

const LightButton = ({ children }) => {
  const stylesheet = usePageStylesheet();
  const theme = useContext(ThemeContext);
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf")
  });

  const onPress = () => console.log('test');


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

export default LightButton;

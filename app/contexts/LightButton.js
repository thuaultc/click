import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import ThemeContext from "./Theme";

function usePageStylesheet() {
  return StyleSheet.create({
    gradientStyle: {
      height: 48,
      alignItems: "center",
      justifyContent: "center"
    },
    view: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center"
    },
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white"
    },
    buttonContainer: {
      width: 382,
      alignItems: "center"
    },
    buttonText: {
      textAlign: "center",
      color: "black",
      padding: 15,
      width: 382,
      alignSelf: "center",
      marginLeft: 10,
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
      <TouchableOpacity style={stylesheet.container} onPress={onPress}>
        <LinearGradient
          colors={[theme.primaryColor, theme.secondaryColor]}
          start={[0, 0.8]}
          end={[0.9, 0.2]}
          locations={[0, 1]}
          style={stylesheet.gradientStyle}
        >
          <View style={stylesheet.view}>
            <Text style={stylesheet.buttonText}>{children}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
};

export default LightButton;

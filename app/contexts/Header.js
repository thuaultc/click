import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "./Theme";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import Icon from "./Icon";

const Header = () => {
  const theme = useContext(ThemeContext);

  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Icon />
        <Text style={styles.title}>{theme.title}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    marginTop: 16
  },
  title: {
    alignSelf: "center",
    marginLeft: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 24
  }
});

export default Header;

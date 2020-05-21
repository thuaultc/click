import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import ThemeContext from "../contexts/Theme";
import Header from "../contexts/Header";

import CardList from "../components/CardList";

function usePageStylesheet() {
  const theme = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      backgroundColor: "white"
    },
    body: {
      flex: 1,
      backgroundColor: theme.backgroundColor
    }
  });
}

const LightScreenTemplate = ({ children, navigation }) => {
  const stylesheet = usePageStylesheet();

  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.header}>
        <Header />
      </View>
      <View style={stylesheet.body}>
        <CardList navigation={navigation} />
        {children}
      </View>
    </View>
  );
};

export default LightScreenTemplate;

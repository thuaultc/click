import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import ThemeContext from "./Theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Icon = () => {
  const theme = useContext(ThemeContext);

  if (theme.iconFamily == "font-awesome") {
    return <FontAwesome5 style={styles.icon} name={theme.iconName} size={24} color="black" />;
  } else {
    return <MaterialCommunityIcons style={styles.icon} name={theme.iconName} size={24} color="black" />;
  }
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center"
  }
});

export default Icon;
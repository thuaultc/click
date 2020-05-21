import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Card = ({ children, navigation }) => {
  const onPress = () => navigation.navigate('routeTemplateScreen');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    marginVertical: 16,
    backgroundColor: "white",
    borderRadius: 2,
    height: 92,
    elevation: 1
  }
});

export default Card;

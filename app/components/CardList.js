import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";

const CardList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
        renderItem={({ item }) => (
          <Card navigation={navigation} key={item.key}>
            {item.key}
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 32
  }
});

export default CardList;

import React from "react";

import { View, Text } from "react-native";

import ScreenTemplate from "./ScreenTemplate";
import CardList from "../components/CardList";
import TallyCounter from "../components/TallyCounter";
import LightButton from "../contexts/LightButton";

const ButtonScreenTemplate = ({ navigation }) => {
  return (
    <ScreenTemplate
      navigation={navigation}
      children={<TallyCounter />}
      children2={
        <View>
          <LightButton><Text>CECI EST UN BOUTON</Text></LightButton>
        </View>
      }
    />
  );
};

export default ButtonScreenTemplate;

import React from "react";

import { View, Text } from "react-native";

import ScreenTemplate from "./ScreenTemplate";
import CardList from "../components/CardList";
import TallyCounter from "../components/TallyCounter";
import Button from "../contexts/Button";

const ButtonScreenTemplate = ({ navigation }) => {
  return (
    <ScreenTemplate
      navigation={navigation}
      children={<TallyCounter />}
      children2={
        <View>
          <CardList/>
          <Button>REINITIALISER LE COMPTEUR</Button>
        </View>
      }
    />
  );
};

export default ButtonScreenTemplate;

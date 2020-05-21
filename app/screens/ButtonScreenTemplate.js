import React from "react";

import { View } from "react-native";

import ScreenTemplate from "./ScreenTemplate";
import CardList from "../components/CardList";
import TallyCounter from "../components/TallyCounter";
import Button from "../contexts/Button";
import LightButton from "../contexts/LightButton";

const ButtonScreenTemplate = ({ navigation }) => {
  return (
    <ScreenTemplate
      navigation={navigation}
      children={<TallyCounter />}
      children2={
        <View>
          <Button>REINITIALISER LE COMPTEUR</Button>
          <LightButton>LIGHT BUTTON</LightButton>
        </View>
      }
    />
  );
};

export default ButtonScreenTemplate;

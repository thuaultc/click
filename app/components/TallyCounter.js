import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TallyDigit from "../components/TallyDigit";

import { FontAwesome5 } from "@expo/vector-icons";
import RoundButton from "../contexts/RoundButton";

import { Audio } from "expo-av";

const soundObject = new Audio.Sound();
soundObject.loadAsync(require("../assets/sounds/click.mp3"));

const TallyCounter = () => {
  const isSoundPlaying = async () => {
    status = await soundObject.getStatusAsync();
    console.log("canPush:", !status.isPlaying);
    return !status.isPlaying;
  };

  const playAudio = async () => {
    try {
      await soundObject.replayAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const [value, setValue] = useState(1754);
  const decrValue = async () => {
    canPush = await isSoundPlaying();
    if (canPush && value > 0) {
      setValue(value - 1);
      playAudio();
    }
  };
  const incrValue = async () => {
    canPush = await isSoundPlaying();
    if (canPush && value < 9999) {
      setValue(value + 1);
      playAudio();
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TallyDigit value={Math.floor(value / 1000)} />
        <TallyDigit value={Math.floor(value / 100) % 10} />
        <TallyDigit value={Math.floor(value / 10) % 10} />
        <TallyDigit value={value % 10} />
      </View>
      <View style={styles.buttons}>
        <RoundButton onPress={decrValue}>
          <FontAwesome5 name="minus" size={16} color="white" />
        </RoundButton>
        <RoundButton onPress={incrValue}>
          <FontAwesome5 name="plus" size={16} color="white" />
        </RoundButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    marginHorizontal: -32,
    justifyContent: "space-around"
  }
});

export default TallyCounter;

import React from "react";

export const themes = {
  tracktive: {
    title: "tracktive_",
    textColor: "white",
    primaryColor: "#EF476F",
    secondaryColor: "#F78C6B",
    backgroundColor: "#F2F4F5",
    iconFamily: "material",
    iconName: "dumbbell"
  },
  stack: {
    title: "stack_",
    textColor: "black",
    primaryColor: "#F78C6B",
    secondaryColor: "#FFD166",
    backgroundColor: "#F2F4F5",
    iconFamily: "font-awesome",
    iconName: "layer-group"
  },
  click: {
    title: "click_",
    textColor: "black",
    primaryColor: "#FFD166",
    secondaryColor: "#83D483",
    primaryButtonColor: "#83D483",
    secondaryButtonColor: "#0CB0A9",
    backgroundColor: "#F2F4F5",
    iconFamily: "material",
    iconName: "counter"
  },
  holdings: {
    title: "holdings_",
    textColor: "white",
    primaryColor: "#83D483",
    secondaryColor: "#0CB0A9",
    backgroundColor: "#F2F4F5",
    iconFamily: "font-awesome",
    iconName: "home"
  },
  purpose: {
    title: "purpose_",
    textColor: "white",
    primaryColor: "#0CB0A9",
    secondaryColor: "#0C637F",
    backgroundColor: "#F2F4F5",
    iconFamily: "font-awesome",
    iconName: "bullseye"
  }
};

const ThemeContext = React.createContext(themes.click);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;

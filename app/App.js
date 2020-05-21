import React from "react";

import ErrorBoundary from "react-native-error-boundary";

//import { NavigationContainer } from "@react-navigation/native";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';


import { ThemeProvider, themes } from "./contexts/Theme";
import ScreenTemplate from "./screens/ScreenTemplate";
import LightScreenTemplate from "./screens/LightScreenTemplate";
import ButtonScreenTemplate from "./screens/ButtonScreenTemplate";
import GradientScreen from "./screens/GradientScreen";

const errorHandler = (error, stackTrace) => {
  console.log(error, stackTrace);
};

const SwitchNavigator = createSwitchNavigator({
  routeHome: {
    screen: GradientScreen
  },
  routeScreen: {
    screen: ScreenTemplate
  },
  routeTemplateScreen: {
    screen: ButtonScreenTemplate
  },
  routeLightScreen: {
    screen: LightScreenTemplate
  }
}, {
    initialRouteName: 'routeHome'
});

const AppContainer = createAppContainer(SwitchNavigator);

const App = () => {
  return (
    <ErrorBoundary onError={errorHandler}>
      <ThemeProvider value={themes.click}>
        <AppContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "../navigation/StackNavigator";

export default function Index() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

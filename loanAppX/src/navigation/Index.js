//  ./App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./TabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

 const Index = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
      
    </NavigationContainer>
  );
}
export default Index
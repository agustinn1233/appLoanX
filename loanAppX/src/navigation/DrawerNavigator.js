import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoansStackNavigator, DetailsStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={TabNavigator} />
      <Drawer.Screen name="Prestamos" component={LoansStackNavigator} />
      <Drawer.Screen name="Detalles" component={DetailsStackNavigator} />
      <Drawer.Screen name="Perfil" component={ProfileStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
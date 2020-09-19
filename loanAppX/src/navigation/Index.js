import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import  { DrawerCustom }  from '../navigation/DrawerCustom';
import  MainTabScreen  from "../navigation/TabNavigator";


const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={DrawerCustom} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

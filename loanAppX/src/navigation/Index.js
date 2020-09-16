import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SecurityInformation from '../screens/SecurityInformation';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              // Selected icon if focused or not
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Details') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Security') {
                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              }

              // Return any component
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Security" component={SecurityInformation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
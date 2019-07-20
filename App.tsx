import React, {Component} from 'react';
import Weather from './components/Weather';
import Forms from './components/Forms';
import Log from './components/Log';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar, createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createBottomTabNavigator(
  {
      Log,
      Weather,
      Forms
  },
  {
      navigationOptions: ({ navigation }) => (
          {
               tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Log') {
                  iconName = `ios-clipboard${focused ? '' : '-outline'}`;
              } else if (routeName === 'Forms') {
                  iconName = `ios-archive${focused ? '' : '-outline'}`;
              } else if (routeName === 'Forms') {
                iconName = `ios-archive${focused ? '' : '-outline'}`;
            }
              return <Ionicons name={iconName} size={25} color={tintColor} />;
          },
      }),
      tabBarOptions: {
          activeTintColor: '#FBDE03',
          inactiveTintColor: '#3F362A',
          activeBackgroundColor: 'rgba(231,69,13, 1)',
          showLabel: true,
          showIcon: true,
      },
      tabBarComponent: BottomTabBar,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
  }
 );

 const App = createAppContainer(RootStack);

 export default App;
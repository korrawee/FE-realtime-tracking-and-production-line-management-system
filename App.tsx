import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './components/Screens/DashboardScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import DetailScreen from './components/Screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardScreen">
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

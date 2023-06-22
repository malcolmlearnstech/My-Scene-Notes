import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './Screens/TestPage';
import Climates from './Screens/Climates';
import Winter from './Screens/Winter';
import Spring from './Screens/Spring';
import Summer from './Screens/Summer';
import Fall from './Screens/Fall';

const Stack = createNativeStackNavigator();

export class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TestPage">
          <Stack.Screen name="TestPage" component={TestPage} />
          <Stack.Screen name="Climates" component={Climates} />
          <Stack.Screen name="Winter" component={Winter} />
          <Stack.Screen name="Spring" component={Spring} />
          <Stack.Screen name="Summer" component={Summer} />
          <Stack.Screen name="Fall" component={Fall} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

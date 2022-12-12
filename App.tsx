/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreenScreen from './src/screens/MealsOverviewScreen/MealsOverview.screen';

const Stack = createNativeStackNavigator();

const App = () => {
  /* When setting up a Navigator (like <Stack.Navigator>) and registering its
  screens (via <Stack.Screen>), you can decide which screen will be shown as a
  default when the app starts.
  Out of the box, the top-most screen (i.e. the first child inside of
  <Stack.Navigator>) is used as the initial screen.*/

  /*Alternatively, there also is an initialRouteName prop that can be set on the
  navigator component */

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen
            name={'Meals Overview'}
            component={MealsOverviewScreenScreen}
          />
        </Stack.Navigator>
        {/*<SafeAreaView style={backgroundStyle}>*/}
        {/*<CategoriesScreen />*/}
        {/*</SafeAreaView>*/}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

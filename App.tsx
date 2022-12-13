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
import { StatusBar, StyleSheet, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreenScreen from './src/screens/MealsOverviewScreen/MealsOverview.screen';
import MealDetails from './src/screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './src/screens/FavoritesScreen';
import FavoritesContextProvider from './src/store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // sceneContainerStyle: { backgroundColor: 'black' },
        headerStyle: { backgroundColor: 'green' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: 'darkgreen' },
        drawerActiveBackgroundColor: 'lightgreen',
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'darkgreen',
      }}>
      <Drawer.Screen
        name={'Categories'}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color: color }}>{'📝'}</Text>
          ),
        }}
      />
      <Drawer.Screen
        name={'Favorites'}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Text style={{ fontSize: size, color: color }}>{'⭐'}</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'Categories'}
            screenOptions={{
              headerStyle: { backgroundColor: 'green' },
              headerTintColor: 'white', // Also affects the back button
              // contentStyle: { backgroundColor: 'black' },
            }}>
            <Stack.Screen
              name="Categories2"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={'Meals'}
              component={MealsOverviewScreenScreen}
              // options={({ route, navigation }) => {
              //   return { title: route.params.title };
              // }}
            />
            <Stack.Screen name={'MealDetails'} component={MealDetails} />
          </Stack.Navigator>
          {/*<SafeAreaView style={backgroundStyle}>*/}
          {/*<CategoriesScreen />*/}
          {/*</SafeAreaView>*/}
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

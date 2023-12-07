import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieScreen from '../screens/movieScreen/MovieScreen';
import PersonScreen from '../screens/personScreen/PersonScreen';
import SearchScreen from '../screens/searchScreen/SearchScreen';
import { Colors } from '../screens/components/styles';
const {primary, tertiary} = Colors;

import Login from "../screens/login/Login";
import Register from "../screens/register/Register";
import Welcome from "../screens/welcome/Welcome";

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
                    headerStyled:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle : {
                        paddingLeft: 20
                    } 
                }}
                initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
        {/* <Stack.Screen name="Register" options={{headerShown: false}} component={Register}/> */}
        {/* <Stack.Screen nrame="Login" options={{headerShown: false}} component={Login}/> */}
        {/* <Stack.Screen options={{headerTintColor: primary}} name="Welcome" component={Welcome}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
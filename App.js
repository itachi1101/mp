import { React, useContext, useEffect } from 'react'
import { View } from 'react-native';



// --------------------------------navigation---------------------------------------------

import AuthNavigation from "./src/Navigation/AuthNavigation";
import TabNavigationUser from './src/Navigation/AppNavigation';
import TabNavigationDriver from './src/Navigation/AppNavigationDriver';
import LoginScreen from './src/screens/GlobalScreens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Context, ContextProvider } from './src/context/Context';
import M from './src/M';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  
  return (
    <ContextProvider>
      <M />
    </ContextProvider>

  )
}
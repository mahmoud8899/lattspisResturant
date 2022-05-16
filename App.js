import { NavigationContainer } from '@react-navigation/native'
import CustomDrawerContentButtom from './src/Navigation/CustomDrawerContentButtom'
import React from 'react'
import { SafeAreaView } from 'react-native'

export default function App() {



  return <SafeAreaView style={{flex : 1}}>
    <NavigationContainer>
      <CustomDrawerContentButtom />
    </NavigationContainer>
  </SafeAreaView>
}
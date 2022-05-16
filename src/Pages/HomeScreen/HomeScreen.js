import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleDrawer from '../../Components/ToggleDrawer'

export default function HomeScreen({ navigation }) {
   return (
      <View>
         <Text>HomeScreen</Text>
         <ToggleDrawer navigation={navigation} />
      </View>
   )
}

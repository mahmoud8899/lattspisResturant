import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../Assistant/FontsDefault'

function ToggleDrawer({ navigation }) {
   return (
      <TouchableOpacity
         style={FontsDefault.ContainerButtonDrawer}
         onPress={() => navigation.toggleDrawer()}
      >
         <Icon name="menu-outline" size={40} style={{ color: 'white' }} />
      </TouchableOpacity>
   )
}

export default ToggleDrawer

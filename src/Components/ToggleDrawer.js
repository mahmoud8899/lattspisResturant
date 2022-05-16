import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function ToggleDrawer({ navigation }) {
   return (
      <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff3b2f85',
            borderRadius: 60,
            width: 65,
            height: 65,
         }}
         onPress={() => navigation.toggleDrawer()}
      >
         <Icon name="menu-outline" size={60} style={{ color: 'white' }} />
      </TouchableOpacity>
   )
}

export default ToggleDrawer

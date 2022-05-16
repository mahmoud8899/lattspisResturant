import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleDrawer from '../../Components/ToggleDrawer'
import FontsDefault from '../../Assistant/FontsDefault'

export default function OrderComplete({ navigation }) {
   return (
      <View style={FontsDefault.containerChildren}>
         <Text style={{ fontFamily: 'Mitr-Regular', color: 'black' }}>
            OrderComplete
         </Text>

         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </View>
   )
}

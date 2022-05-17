import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleDrawer from '../../Components/ToggleDrawer'
import FontsDefault from '../../Assistant/FontsDefault'

export default function HomeScreen({ navigation }) {
   return (
      <View style={FontsDefault.containerChildren}>
         <Text style={[FontsDefault.TitleFont, FontsDefault.FontColorFirstRed]}>
            HomeScreen
         </Text>

         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </View>
   )
}

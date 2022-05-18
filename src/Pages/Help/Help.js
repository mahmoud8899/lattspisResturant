import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ToggleDrawer from '../../Components/ToggleDrawer'
import FontsDefault from '../../Assistant/FontsDefault'
import Styles from './Styles'
import InputScreen from '../../Components/InputScreen/InputScreen'

export default function Help({ navigation }) {
   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.containerHelp}>
            <Text
               style={[FontsDefault.TitleFont, FontsDefault.FontColorFirstRed]}
            >
               Contact Us
            </Text>
         </View>

         <View style={Styles.mainContainerInputs}>
            <InputScreen placeholder="Title" />

            <InputScreen
               placeholder="Description"
               StyleContainer={Styles.styleContainerDescription}
            />

            <TouchableOpacity style={FontsDefault.containerButton}>
               <Text
                  style={[
                     FontsDefault.fontColorWhite,
                     FontsDefault.stylesTextInButton,
                     FontsDefault.fontFamilyBold,
                  ]}
               >
                  Send
               </Text>
            </TouchableOpacity>
         </View>

         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </View>
   )
}

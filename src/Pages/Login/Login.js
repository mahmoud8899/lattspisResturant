import React, { Fragment } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import FontsDefault from '../../Assistant/FontsDefault'
import InputScreen from '../../Components/InputScreen/InputScreen'
import ToggleDrawer from '../../Components/ToggleDrawer'
import Styles from './Styles'

// check user email  if user have account

export default function Login({ navigation }) {
   return (
      <Fragment>
         <View style={FontsDefault.containerChildren}>
            <View style={Styles.firstContainer}>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  Login
               </Text>
            </View>

            <View style={Styles.mainContent}>
               <View style={FontsDefault.containerImage}>
                  <Image
                     style={[FontsDefault.containerImageChildren, Styles.image]}
                     source={require('../../../data/myimage/email.png')}
                  />
               </View>

               <View style={Styles.marginTopFirst}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     We'll send you an email with a magic link that'll log you
                     in right away.
                  </Text>
               </View>

               <View>
                  <InputScreen placeholder="Email" />
               </View>

               <View>
                  <InputScreen placeholder="Password" />
               </View>

               <TouchableOpacity style={FontsDefault.containerButton}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontColorWhite,
                           FontsDefault.stylesTextInButton,
                           FontsDefault.fontFamilyBold,
                        ]}
                     >
                        Login
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </Fragment>
   )
}

import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FontsDefault from '../../Assistant/FontsDefault'
import Styles from './Styles'
import ToggleDrawer from '../../Components/ToggleDrawer'

export default function OrderComplete(props) {
   const { navigation } = props

   // navigation show datilas order
   const NavigationOneOrder = () => {
      return navigation.navigate('OneOrder')
      //
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <ScrollView>
            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  Order History
               </Text>
            </View>

            <View style={[Styles.containerBox, Styles.MarginTop]}>
               <View style={Styles.edit}>
                  <Text
                     style={[
                        FontsDefault.stylesTextInButton,
                        FontsDefault.FontColorFirstRed,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Details :
                  </Text>
                  <Icon name="create-outline" style={Styles.iconAddress} />
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Time :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3 Days Ago
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Number :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3287482374234
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Pay Payment :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Cart Number{' '}
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Time Booking :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     09:08:00 - Thursday - 14/04/2022 - sdg
                  </Text>
               </View>

               <View>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     1x items
                  </Text>
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
                        45.00 Kr
                     </Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={FontsDefault.containerButton}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontColorWhite,
                           FontsDefault.stylesTextInButton,
                           FontsDefault.fontFamilyBold,
                        ]}
                     >
                        Details
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={[Styles.containerBox, Styles.MarginTop]}>
               <View style={Styles.edit}>
                  <Text
                     style={[
                        FontsDefault.stylesTextInButton,
                        FontsDefault.FontColorFirstRed,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Details :
                  </Text>
                  <Icon name="create-outline" style={Styles.iconAddress} />
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Time :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3 Days Ago
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Number :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3287482374234
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Pay Payment :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Cart Number{' '}
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Time Booking :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     09:08:00 - Thursday - 14/04/2022 - sdg
                  </Text>
               </View>

               <View>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     1x items
                  </Text>
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
                        45.00 Kr
                     </Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={FontsDefault.containerButton}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontColorWhite,
                           FontsDefault.stylesTextInButton,
                           FontsDefault.fontFamilyBold,
                        ]}
                     >
                        Details
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={[Styles.containerBox, Styles.MarginTop]}>
               <View style={Styles.edit}>
                  <Text
                     style={[
                        FontsDefault.stylesTextInButton,
                        FontsDefault.FontColorFirstRed,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Details :
                  </Text>
                  <Icon name="create-outline" style={Styles.iconAddress} />
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Time :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3 Days Ago
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Order Number :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     3287482374234
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Pay Payment :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Cart Number{' '}
                  </Text>
               </View>

               <View style={Styles.flexDetails}>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     Time Booking :
                  </Text>

                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     09:08:00 - Thursday - 14/04/2022 - sdg
                  </Text>
               </View>

               <View>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     1x items
                  </Text>
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
                        45.00 Kr
                     </Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={FontsDefault.containerButton}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontColorWhite,
                           FontsDefault.stylesTextInButton,
                           FontsDefault.fontFamilyBold,
                        ]}
                     >
                        Details
                     </Text>
                  </View>
               </TouchableOpacity>
            </View>
         </ScrollView>
         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </View>
   )
}

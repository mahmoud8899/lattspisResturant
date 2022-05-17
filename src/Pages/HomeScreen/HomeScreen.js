import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleDrawer from '../../Components/ToggleDrawer'
import FontsDefault from '../../Assistant/FontsDefault'
import { Picker } from '@react-native-picker/picker'
import Styles from './style'

export default function HomeScreen({ navigation }) {
   const [selectedLanguage, setSelectedLanguage] = useState()
   const [showOrder, setShowOrder] = useState(false)

   const handleShowOrder = () => {
      if (showOrder) {
         setShowOrder(false)
      } else {
         setShowOrder(true)
      }
   }

   return (
      <View style={FontsDefault.containerChildren}>
         <View style={Styles.containerOption}>
            <Picker
               style={Styles.stylePicker}
               placeholder="Select your SIM"
               selectedValue={selectedLanguage}
               onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
               }
            >
               <Picker.Item label="Quite (44 minutes)" value="key1" />
               <Picker.Item label="Moderate (50 minutes)" value="key2" />
               <Picker.Item label="Busy (60 minutes)" value="key3" />
            </Picker>
         </View>

         <View>
            <Text
               style={[FontsDefault.TitleFont, FontsDefault.FontColorFirstRed]}
            >
               All Orders
            </Text>
         </View>

         <View style={Styles.mainContainerOrder}>
            <View style={Styles.someMargin}>
               <Text
                  style={[
                     FontsDefault.fontSecondTitle,
                     FontsDefault.fontFamilyRegular,
                  ]}
               >
                  #21354
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
                  2 Items (153 Kr)
               </Text>
            </View>
            <View style={Styles.containerSecondContainerText}>
               <View>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     2, Somerton Lane, Newport
                  </Text>
               </View>
            </View>

            <View style={Styles.containerSecondContainerText}>
               <View>
                  <Text
                     style={[
                        FontsDefault.FontSize,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyBold,
                     ]}
                  >
                     {showOrder
                        ? 'Hide More Details . . .'
                        : 'Show More Details . . .'}
                  </Text>
               </View>
               <TouchableOpacity onPress={handleShowOrder}>
                  {showOrder ? (
                     <Icon
                        name="chevron-up-outline"
                        size={30}
                        style={FontsDefault.FontColorFirstRed}
                     />
                  ) : (
                     <Icon
                        name="chevron-down-outline"
                        size={30}
                        style={FontsDefault.FontColorFirstRed}
                     />
                  )}
               </TouchableOpacity>
            </View>

            {showOrder && (
               <TouchableOpacity>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     Order time : 3 Days Ago
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     Order Number : 3287482374234
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     Order status : Processing
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     Pay Payment : Cart Number{' '}
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     Time Booking : 09:08:00 - Thursday - 14/04/2022 - sdg
                  </Text>
                  <Text
                     style={[
                        FontsDefault.fontDescription,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                        Styles.marginFont,
                     ]}
                  >
                     1x Item
                  </Text>
               </TouchableOpacity>
            )}
         </View>

         <View style={FontsDefault.containerToggleDrawer}>
            <ToggleDrawer navigation={navigation} />
         </View>
      </View>
   )
}

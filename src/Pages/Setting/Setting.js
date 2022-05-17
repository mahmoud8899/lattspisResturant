import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ToggleDrawer from '../../Components/ToggleDrawer'
import FontsDefault from '../../Assistant/FontsDefault'
import { Fragment } from 'react/cjs/react.production.min'
import Styles from './Styles'

export default function Setting({ navigation }) {
   const [isEnabled, setIsEnabled] = useState(false)

   const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

   return (
      <Fragment>
         <View
            style={{
               marginVertical: 30,
               borderBottomWidth: 1,
               borderBottomColor: '#ff3b2f85',
               padding: 10,
            }}
         >
            <Text
               style={[FontsDefault.TitleFont, FontsDefault.FontColorFirstRed]}
            >
               Settings
            </Text>
         </View>

         <View style={FontsDefault.containerChildren}>
            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  Orders
               </Text>
               <Text
                  style={[
                     FontsDefault.fontButtonCart,
                     FontsDefault.fontColorLightLess,
                     FontsDefault.fontFamilyRegular,
                  ]}
               >
                  Manage Your income orders
               </Text>
            </View>

            <View style={[Styles.containerFlex]}>
               <View>
                  <Text
                     style={[
                        FontsDefault.fontButtonCart,
                        FontsDefault.fontColorBlack,
                        FontsDefault.fontFamilyRegular,
                     ]}
                  >
                     auto accept orders
                  </Text>
               </View>
               <View>
                  <Switch
                     trackColor={{ false: '#767577', true: '#81b0ff' }}
                     thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                     ios_backgroundColor="#3e3e3e"
                     onValueChange={toggleSwitch}
                     value={isEnabled}
                  />
               </View>
            </View>
            <View>
               <View style={Styles.containerTitle}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.FontColorFirstRed,
                     ]}
                  >
                     Delivery Orders
                  </Text>
               </View>

               <View style={Styles.mainSomeFlex}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorLightLess,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Quite Delivery Item
                     </Text>
                  </View>
                  <View style={Styles.mainSomeFlex}>
                     <Icon
                        name="add-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyMedium,
                           Styles.somePadding,
                        ]}
                     >
                        44 min
                     </Text>
                     <Icon
                        name="remove-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                  </View>
               </View>

               <View style={Styles.mainSomeFlex}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorLightLess,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Moderate Delivery Time
                     </Text>
                  </View>
                  <View style={Styles.mainSomeFlex}>
                     <Icon
                        name="add-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyMedium,
                           Styles.somePadding,
                        ]}
                     >
                        50 min
                     </Text>
                     <Icon
                        name="remove-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                  </View>
               </View>

               <View style={Styles.mainSomeFlex}>
                  <View>
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorLightLess,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Busy Deliver time
                     </Text>
                  </View>
                  <View style={Styles.mainSomeFlex}>
                     <Icon
                        name="add-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyMedium,
                           Styles.somePadding,
                        ]}
                     >
                        60 min
                     </Text>
                     <Icon
                        name="remove-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                  </View>
               </View>
            </View>

            <View>
               <View style={Styles.containerTitle}>
                  <Text
                     style={[
                        FontsDefault.TitleFont,
                        FontsDefault.FontColorFirstRed,
                     ]}
                  >
                     Pickup Orders
                  </Text>
               </View>

               <View style={Styles.mainSomeFlex}>
                  <View style={Styles.widthContainer}>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Instructions for customers
                     </Text>
                     <Text
                        style={[
                           FontsDefault.FontStylePrice,
                           FontsDefault.fontColorLightLess,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Skip this queue - let them Know it is a deliveroo order
                     </Text>
                  </View>
                  <View>
                     <Icon
                        name="open-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                  </View>
               </View>

               <View style={Styles.mainSomeFlex}>
                  <View style={Styles.widthContainer}>
                     <Text
                        style={[
                           FontsDefault.fontDescription,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Preparation Time
                     </Text>
                     <Text
                        style={[
                           FontsDefault.FontStylePrice,
                           FontsDefault.fontColorLightLess,
                           FontsDefault.fontFamilyRegular,
                        ]}
                     >
                        Skip this queue - let them Know it is a deliveroo order
                     </Text>
                  </View>
                  <View style={Styles.mainSomeFlex}>
                     <Icon
                        name="add-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                     <Text
                        style={[
                           FontsDefault.fontButtonCart,
                           FontsDefault.fontColorBlack,
                           FontsDefault.fontFamilyMedium,
                           Styles.somePadding,
                        ]}
                     >
                        60 min
                     </Text>
                     <Icon
                        name="remove-outline"
                        style={[
                           FontsDefault.iconSize,
                           FontsDefault.FontColorFirstRed,
                        ]}
                     />
                  </View>
               </View>
            </View>

            <View style={FontsDefault.containerToggleDrawer}>
               <ToggleDrawer navigation={navigation} />
            </View>
         </View>
      </Fragment>
   )
}

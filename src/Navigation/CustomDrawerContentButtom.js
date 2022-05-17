import React, { useState } from 'react'
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
} from '@react-navigation/drawer'
import { View, Text, Switch } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeNavigation from './HomeNavigation'
import OrderComplete from '../Pages/OrderComplete/OrderComplete'
import Setting from '../Pages/Setting/Setting'
import Help from '../Pages/Help/Help'
import { FullName } from '../Assistant/Name'
import Styles from './style'
import FontsDefault from '../Assistant/FontsDefault'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
   const [isEnabled, setIsEnabled] = useState(false)

   const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

   return (
      <DrawerContentScrollView>
         <View style={[Styles.mainContainer, Styles.containerFlex]}>
            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  {FullName}
               </Text>
            </View>
            <View
               style={[
                  FontsDefault.containerIcon,
                  FontsDefault.backgroundColorIcon,
               ]}
            >
               <Icon
                  name="close-outline"
                  style={[FontsDefault.iconSize, FontsDefault.fontColorWhite]}
               />
            </View>
         </View>

         <View style={[Styles.mainContainer]}>
            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  Uppsala Resturant
               </Text>
            </View>

            <View>
               <Text
                  style={[
                     FontsDefault.TitleFont,
                     FontsDefault.FontColorFirstRed,
                  ]}
               >
                  Uppsala
               </Text>
            </View>
         </View>
         <View style={[Styles.mainContainer, Styles.containerFlex]}>
            <View>
               <Text
                  style={[
                     FontsDefault.fontDescription,
                     FontsDefault.fontColorBlack,
                     FontsDefault.fontFamilyRegular,
                  ]}
               >
                  Open For Orders
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

         <DrawerItemList {...props} labelStyle={{ fontFamily: 'Mitr-Bold' }} />
      </DrawerContentScrollView>
   )
}

const CustomDrawerContentButtom = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: {
               width: 300,
               backgroundColor: 'white',
            },
            overlayColor: null,
            drawerLabelStyle: { fontFamily: 'Mitr-Regular', fontSize: 16 },
            drawerActiveTintColor: '#ff3b2f85',
            drawerInactiveTintColor: 'black',
            drawerItemStyle: { backgroundColor: null },
            sceneContainerStyle: {
               backgroundColor: 'white',
            },
         }}
         drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
         <Drawer.Screen
            name="PageHome"
            component={HomeNavigation}
            options={{
               title: 'Notifications',
               drawerIcon: ({ color }) => (
                  <Icon
                     name="notifications-outline"
                     size={25}
                     style={{ marginRight: -20, color }}
                  />
               ),
            }}
         />

         <Drawer.Screen
            name="OrderComplete"
            component={OrderComplete}
            options={{
               title: 'OrderComplete',
               drawerIcon: ({ color }) => (
                  <Icon
                     name="help-circle-outline"
                     size={25}
                     style={{ marginRight: -20, color }}
                  />
               ),
            }}
         />

         <Drawer.Screen
            name="Settings"
            component={Setting}
            options={{
               title: 'Settings',
               drawerIcon: ({ color }) => (
                  <Icon
                     name="settings-outline"
                     size={25}
                     style={{ marginRight: -20, color }}
                  />
               ),
            }}
         />

         <Drawer.Screen
            name="Help"
            component={Help}
            options={{
               title: 'Help',
               drawerIcon: ({ color }) => (
                  <Icon
                     name="help-circle-outline"
                     size={25}
                     style={{ marginRight: -20, color }}
                  />
               ),
            }}
         />
      </Drawer.Navigator>
   )
}

export default CustomDrawerContentButtom

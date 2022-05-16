

import React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import { View, Image, Text, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';
import COLORS from '../Assistant/color';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeNavigation from './HomeNavigation';
import { FullName } from '../Assistant/Name';
import Styles from './style'

const Drawer = createDrawerNavigator();



const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
    >
      <View>
        <View style={Styles.container} >
          <View>
            <Text style={[Styles.IconSizs, Styles.ColorOne]} >{FullName}</Text>
          </View>
          <View style={Styles.conteinerIcon} >
            <Icon name='close-outline' style={[Styles.IconSizs, Styles.colorWhite]} />
          </View>
        </View>
        <View style={Styles.border}    />


      </View>

      <View>
        <View style={Styles.container} >
          <View>
            <Text style={[Styles.IconSizs, Styles.ColorOne]} >Uppsala Resturant</Text>
          </View>
          
        </View>
        <View style={Styles.border}    />


      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};






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
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'black',
        drawerItemStyle: { backgroundColor: null },
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>



      <Drawer.Screen
        name="PageHome"
        component={HomeNavigation}
        options={{
          title: 'Notifications',
          drawerIcon: ({ color }) => (
            <Icon name="notifications-outline" size={25} style={{ marginRight: -20, color }} />
          ),
        }} />
      <Drawer.Screen
        name="settings"
        component={HomeNavigation}
        options={{
          title: 'settings',
          drawerIcon: ({ color }) => (
            <Icon name="settings-outline" size={25} style={{ marginRight: -20, color }} />
          ),
        }} />

      <Drawer.Screen
        name="Help"
        component={HomeNavigation}
        options={{
          title: 'Help',
          drawerIcon: ({ color }) => (
            <Icon name="help-circle-outline" size={25} style={{ marginRight: -20, color }} />
          ),
        }} />





    </Drawer.Navigator>
  );
};

export default CustomDrawerContentButtom;







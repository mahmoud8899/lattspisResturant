import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeScreen({ navigation }) {





    return <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name='menu-outline' size={60} />
        </TouchableOpacity>
    </View>
}
import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

export default function InputScreen(props) {
   const { placeholder, StyleContainer } = props

   return (
      <View style={StyleContainer ? StyleContainer : Styles.InputContainer}>
         <TextInput
            style={Styles.Input}
            placeholder={placeholder}
            placeholderTextColor={COLORS.lightless}
            placeholderStyle={{ fontFamily: 'Mitr-Bold' }}
         />
      </View>
   )
}

const Styles = ScaledSheet.create({
   InputContainer: {
      borderColor: COLORS.firstRed,
      borderWidth: '2@s',
      borderRadius: '6@s',
      height: '60@s',
      padding: '10@s',
      marginTop: '15@s',
   },
   Input: {
      color: COLORS.firstRed,
      fontSize: '19@s',
      marginTop: '3@s',
      marginBottom: '0@s',
      padding: '0@s',
   },
})

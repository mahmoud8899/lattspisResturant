import { ScaledSheet } from 'react-native-size-matters'
import COLORS from './Color'

const FontsDefault = ScaledSheet.create({
   containerChildren: {
      backgroundColor: COLORS.white,
      flex: 1,
      padding: '10@s',
      position: 'relative',
   },
   containerToggleDrawer: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 30,
      marginLeft: 30,
   },
   ContainerButtonDrawer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ff3b2f85',
      borderRadius: '60@s',
      width: '50@s',
      height: '50@s',
   },
   fontColorBlack: {
      color: COLORS.light,
   },
   fontColorLightLess: {
      color: COLORS.lightless,
   },
   FontColorFirstRed: {
      color: COLORS.firstRed,
   },
   fontColorNotClick: {
      color: COLORS.notClick,
   },
   fontColorWhite: {
      color: COLORS.white,
   },
   FontSize: {
      fontSize: '20@s',
   },
   iconSize: {
      fontSize: '25@s',
   },
   fontFamilyBold: {
      fontFamily: 'Mitr-Bold',
   },
   fontFamilyMedium: {
      fontFamily: 'Mitr-Medium',
   },
   fontFamilyLight: {
      fontFamily: 'Mitr-Light',
   },
   fontFamilyRegular: {
      fontFamily: 'Mitr-Regular',
   },
   fontFamilySemiBold: {
      fontFamily: 'Mitr-SemiBold',
   },
   fontButtonCart: {
      color: COLORS.white,
      fontSize: '16@s',
   },
   TitleFont: {
      fontSize: '24@s',
      fontFamily: 'Mitr-Bold',
      color: COLORS.light,
   },
   fontSecondTitle: {
      fontSize: '20@s',
      fontFamily: 'Mitr-Bold',
      color: COLORS.light,
   },
   fontDescription: {
      fontSize: '14@s',
      lineHeight: 20,
   },
   FontStylePrice: {
      fontSize: '13@s',
   },
   stylesTextInButton: {
      fontSize: '18@s',
   },
   containerButton: {
      backgroundColor: '#ff3b2f85',
      height: 60,
      borderRadius: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15,
   },
   containerIcon: {
      width: '30@s',
      height: '30@s',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10@s',
   },
   backgroundColorIcon: {
      backgroundColor: COLORS.firstRed,
   },
   containerImageChildren: {
      width: '100%',
      height: '300@s',
   },
})

export default FontsDefault

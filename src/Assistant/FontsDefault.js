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
   fontButtonCart: {
      color: COLORS.white,
      fontFamily: 'Mitr-Bold',
      fontSize: '16@s',
   },
   TitleFont: {
      fontSize: '24@s',
      fontFamily: 'Mitr-Bold',
      color: COLORS.light,
      textTransform: 'capitalize',
   },
   fontDescription: {
      fontSize: '14@s',
      lineHeight: 20,
   },
   FontStylePrice: {
      fontSize: '13@s',
   },
   stylesTextInButton: {
      backgroundColor: COLORS.notClick,
      color: COLORS.firstRed,
      borderRadius: '10@s',
      padding: '8@s',
   },
})

export default FontsDefault

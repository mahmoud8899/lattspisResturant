import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerHelp: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '15@s',
   },

   containerTitle: {
      marginTop: '20@s',
   },
   mainSomeFlex: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   styleContainerDescription: {
      borderColor: COLOR.firstRed,
      borderWidth: '2@s',
      borderRadius: '6@s',
      height: '120@s',
      padding: '10@s',
      marginTop: '30@s',
   },
   mainContainerInputs: {
      marginTop: '60@s',
   },
   widthContainer: {
      width: '60%',
      marginTop: '15@s',
   },

   containerFlex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30@s',
   },
   somePadding: {
      padding: '10@s',
   },
})

export default Styles

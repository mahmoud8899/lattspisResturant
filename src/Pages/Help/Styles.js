import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerHelp: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '15@s',
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
})

export default Styles

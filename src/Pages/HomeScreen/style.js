import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerOption: {
      borderColor: '#ff3b2f85',
      borderWidth: 1,
      backgroundColor: '#ff3b2f85',
      borderRadius: 30,
      marginVertical: 30,
   },
   stylePicker: {
      color: 'white',
      backgroundColor: 'transparent',
   },
   mainContainerOrder: {
      backgroundColor: '#ff3b2f30',
      padding: '12@s',
      borderRadius: '15@s',
      marginTop: '10@s',
   },
   someMargin: {
      marginBottom: '6@s',
   },
   containerSecondContainerText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },

   // ------------------
   marginFont: {
      marginTop: '5@s',
   },
})

export default Styles

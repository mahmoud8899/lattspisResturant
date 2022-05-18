import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   containerBox: {
      borderWidth: '1@s',
      borderColor: COLOR.firstRed,
      padding: '10@s',
      borderRadius: '10@s',
   },
   MarginTop: {
      marginTop: '20@s',
   },
   edit: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   flexDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '5@s',
   },
   iconAddress: {
      color: COLOR.firstRed,
      fontSize: '30@s',
   },
})

export default Styles

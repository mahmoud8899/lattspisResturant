import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../Assistant/Color'

const Styles = ScaledSheet.create({
   mainContainer: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#ff3b2f85',
      padding: '10@s',
   },
   containerFlex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
})

export default Styles

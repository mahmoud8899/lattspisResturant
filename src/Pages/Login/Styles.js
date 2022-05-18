import { ScaledSheet } from 'react-native-size-matters'
import COLORS from '../../Assistant/Color'

const Styles = ScaledSheet.create({
   mainContent: {
      marginTop: '20@s',
   },
   marginTopFirst: {
      marginTop: '10@s',
   },
   image: {
      height: '200@s',
      resizeMode: 'contain',
   },
   firstContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
   },
})

export default Styles

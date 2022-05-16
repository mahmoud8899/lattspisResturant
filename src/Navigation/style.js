import { ScaledSheet, scale } from 'react-native-size-matters'
import COLOR from '../Assistant/color'


const Styles = ScaledSheet.create({


    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginVertical: 40,

    },

    ColorOne: {
        color: COLOR.firstRed,
    },

    conteinerIcon: {

        width: '30@s',
        height: '30@s',
        borderRadius: 50,
        backgroundColor: COLOR.firstRed,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10@s'

    },
    IconSizs: {
        fontSize: '25@s',
        fontWeight: 'bold'

    },
    colorWhite: {
        color: COLOR.white
    },
    border: {

        width: '100%',
        borderBottomColor: COLOR.firstRed,
        borderWidth: 1,
       
    }



})

export default Styles

import { StyleSheet } from 'react-native'

import { height } from '../../styles/dimensions'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    list: {
        height: height > 600 ? '70%' : '65%'
    },
    formContainer: {
        backgroundColor: colors.darkGrey,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        padding: 15,
        fontSize: 18,
        backgroundColor: colors.white,
        width: '80%'
    },
})

export default styles
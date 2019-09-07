import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formWrapper: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        padding: 15,
        fontSize: 18,
        width: '80%',
        borderBottomWidth: 1,
        borderColor: colors.black
    },
})

export default styles
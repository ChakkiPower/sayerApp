import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    sendButtonContainer: {
        backgroundColor: colors.purple,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendButton: {
        tintColor: colors.white,
        width: 20,
        height: 20
    }
})

export default styles
import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.darkBlue,
        paddingHorizontal: 25,
        paddingVertical: 40,
    },
    headerTitle: {
        color: colors.white,
        fontSize: 40
    },
    headerSubtitle: {
        color: colors.white,
        fontSize: 16,
        maxWidth: '90%'
    },
    backButtonContainer: {
        backgroundColor: colors.purple,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    backButton: {
        tintColor: colors.white,
        width: 20,
        height: 20
    },
})

export default styles
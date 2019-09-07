import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    addButtonContainer: {
        backgroundColor: colors.darkPink,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: colors.black,
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 3,
    },
    addButton: {
        tintColor: colors.pink
    }
})

export default styles
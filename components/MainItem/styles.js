import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        maxWidth: '85%',
        fontSize: 18,
    },
    counterContainer: {
        backgroundColor: colors.darkBlue,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counter: {
        color: colors.white,
        fontSize: 16
    },
    deleteButton: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    },
    deleteButtonText: {
        color: colors.white,
        fontSize: 18
    }
})

export default styles
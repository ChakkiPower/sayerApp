import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({
    itemContainer: {
        padding: 20,
        flexDirection: 'row'
    },
    avatarContainer: {
        flex: 1,
    },
    avatar: {
        height: 60,
        width: 60,
        borderWidth: 0.5,
        borderColor: colors.darkGrey
    },
    comment: {
        flex: 3
    }
})

export default styles
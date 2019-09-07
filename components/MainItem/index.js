import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-swipeable'
import PropTypes from 'prop-types'

//STYLES
import styles from './styles'

const MainItem = ({ id, title, comments, counter, goToScreen, addComment, deleteItem }) => (
    rightButtons = [<TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(id)}><Text style={styles.deleteButtonText}>Delete</Text></TouchableOpacity>],
    <Swipeable rightButtons={rightButtons} rightButtonWidth={100}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => goToScreen('empeekTestApp.CommentsScreen', { id, title, comments, addComment })}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>{counter}</Text>
            </View>
        </TouchableOpacity>
    </Swipeable>
)

MainItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    comments: PropTypes.array,
    counter: PropTypes.number,
    goToScreen: PropTypes.func,
    addComment: PropTypes.func,
    deleteItem: PropTypes.func,
}

export default MainItem
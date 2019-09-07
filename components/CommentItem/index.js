import React from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const CommentItem = ({ comment, avatar }) => (
    <View style={styles.itemContainer}>
        <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { backgroundColor: avatar }]} />
        </View>
        <Text style={styles.comment}>{comment}</Text>
    </View>
)

CommentItem.propTypes = {
    comment: PropTypes.string
}

export default CommentItem
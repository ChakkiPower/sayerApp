import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

//STYLES
import styles from './styles'

//ASSETS
import send from '../../assets/images/right-arrow.png'

const SendButton = ({ onPress }) => (
    <TouchableOpacity style={styles.sendButtonContainer} onPress={() => onPress()}>
        <Image source={send} style={styles.sendButton} />
    </TouchableOpacity>
)

SendButton.propTypes = {
    onPress: PropTypes.func,
}

export default SendButton
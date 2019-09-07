import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'

//ASSETS
import backArrow from '../../assets/images/left-arrow.png'

//STYLES
import styles from './styles'

const Header = ({ title, subtitle, popScreen, style }) => (
    <View style={[styles.headerContainer, style]}>
        {popScreen && <TouchableOpacity style={styles.backButtonContainer} onPress={() => popScreen()}>
            <Image source={backArrow} style={styles.backButton} />
        </TouchableOpacity>}
        {title && <Text style={styles.headerTitle}>{title}</Text>}
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
)

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    popScreen: PropTypes.func,
    style: PropTypes.object,
}

export default Header
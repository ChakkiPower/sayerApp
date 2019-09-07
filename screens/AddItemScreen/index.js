import React, { Component } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation'
import uuid from 'uuid'
import PropTypes from 'prop-types'

//COMPONENTS
import Header from '../../components/Header'
import SendButton from '../../components/SendButton'

//STYLES
import styles from './styles'

class AddItemScreen extends Component {
    static options() {
        return {
            topBar: {
                visible: false,
                height: 0
            },
        };
    }

    state = {
        id: uuid.v4(),
        title: '',
        comments: []
    }

    onChangeText = title => {
        this.setState({
            title,
        })
    }

    addItem = () => {
        const { props: { addItem } } = this.props;
        const { title } = this.state;
        if (title) {
            addItem(this.state);
            this.popScreen();
        }
    }

    popScreen = () => {
        const { componentId } = this.props;
        Navigation.pop(componentId)
    }

    render() {
        return (
            <SafeAreaView>
                <Header subtitle="Create new item" popScreen={this.popScreen} style={styles.header} />
                <View style={styles.formWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder='New item title...'
                        onChangeText={this.onChangeText}
                    />
                    <SendButton onPress={this.addItem} />
                </View>
            </SafeAreaView>
        )
    }
}

AddItemScreen.propTypes = {
    componentId: PropTypes.string,
    props: PropTypes.object
}

export default AddItemScreen;
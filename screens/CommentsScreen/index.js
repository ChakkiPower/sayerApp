import React, { Component } from 'react';
import {
    View,
    FlatList,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import uuid from 'uuid'
import PropTypes from 'prop-types'

//STYLES
import styles from './styles'

//COMPONENTS
import CommentItem from '../../components/CommentItem'
import Header from '../../components/Header'
import SendButton from '../../components/SendButton';

class CommentsScreen extends Component {
    static options() {
        return {
            topBar: {
                visible: false,
                height: 0
            },
        };
    }

    state = {
        comment: '',
        comments: this.props.props.comments
    }

    onChangeText = comment => {
        this.setState({
            comment
        })
    }

    onCommentAdd = (itemId) => {
        const { comment } = this.state
        const { props: { addComment } } = this.props;
        if (comment) {
            this.setState(({ comments }) => ({
                comments: [{ id: uuid.v4(), avatar: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`, comment }, ...comments],
                comment: ''
            }), () => addComment(itemId, this.state.comments))
        }
        Keyboard.dismiss()
    }

    popScreen = () => {
        const { componentId } = this.props;
        Navigation.pop(componentId)
    }

    render() {
        const { props: { id, title } } = this.props;
        const { comments, comment } = this.state
        return (
            <SafeAreaView>
                <Header subtitle={title} popScreen={this.popScreen} style={styles.header} />
                <KeyboardAvoidingView behavior='height'>
                    <FlatList
                        inverted
                        data={comments}
                        renderItem={({ item }) => <CommentItem comment={item.comment} avatar={item.avatar} />}
                        style={styles.list}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.formContainer}>
                        <TextInput
                            value={comment}
                            style={styles.input}
                            placeholder='New comment goes here...'
                            onChangeText={this.onChangeText}
                        />
                        <SendButton onPress={() => this.onCommentAdd(id)} />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

CommentsScreen.propTypes = {
    componentId: PropTypes.string,
    props: PropTypes.object
}

export default CommentsScreen;
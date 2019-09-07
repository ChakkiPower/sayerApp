import React, { Component } from 'react';
import {
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types'

//COMPONENTS
import MainItem from '../../components/MainItem'
import Header from '../../components/Header'

//STYLES
import styles from './styles'

//ASSETS
import plus from '../../assets/images/plus-black-symbol.png'

class MainScreen extends Component {
    static options() {
        return {
            topBar: {
                visible: false,
                height: 0
            },
        };
    }

    state = {
        data: [],
        isLoading: true,
    }

    async componentDidMount() {
        try {
            const data = await AsyncStorage.getItem('ITEMS')
            if (data !== null) {
                this.setState({
                    data: JSON.parse(data),
                    isLoading: false
                })
            } else {
                this.setState({
                    data: [],
                    isLoading: false
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    storeData = async () => {
        const { data } = this.state;
        try {
            await AsyncStorage.setItem('ITEMS', JSON.stringify(data))
        } catch (e) {
            console.log(e)
        }
    }

    goToScreen = (screenName, props) => {
        const { componentId } = this.props;
        Navigation.push(componentId, {
            component: {
                name: screenName,
                passProps: {
                    props,
                },
            },
        });
    };

    addItem = item => {
        this.setState(({ data }) => ({
            data: [...data, item]
        }), () => this.storeData())
    }

    deleteItem = id => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }), () => this.storeData())
    }

    addComment = (id, comments) => {
        const { data } = this.state;
        const tempData = data;
        tempData.map(item => item.id === id ? item.comments = comments : null)
        this.setState({
            data: tempData
        }, () => this.storeData())
    }

    render() {
        const { data, isLoading } = this.state;
        return (
            <ScrollView>
                <Header title="Sayer" subtitle="World`s most used time waster" />
                <View>
                    {
                        isLoading ?
                            <ActivityIndicator size='large' />
                            :
                            <View>
                                <FlatList
                                    extraData={this.state}
                                    data={data}
                                    renderItem={({ item }) => <MainItem id={item.id} title={item.title} comments={item.comments} counter={item.comments.length} goToScreen={this.goToScreen} addComment={this.addComment} deleteItem={this.deleteItem} />}
                                    keyExtractor={item => item.id}
                                />
                                <TouchableOpacity style={styles.addButtonContainer}
                                    onPress={() => this.goToScreen('empeekTestApp.AddItemScreen', { addItem: this.addItem })}
                                >
                                    <Image source={plus} style={styles.addButton} />
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </ScrollView>
        );
    }
};

MainScreen.propTypes = {
    componentId: PropTypes.string
}

export default MainScreen;
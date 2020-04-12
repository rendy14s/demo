/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';

export class Start extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLog: ''
        };
    }



    componentDidMount() {
        console.log(this.props.route.params.isLoggedIn, 'Parsing Param');
        this.setState({ isLog: this.props.route.params.isLoggedIn }, () => {
            this.reRoute(this.state.isLog);
        })

    }

    reRoute = async (props) => {
        await setTimeout(() => {
            {
                props ?
                    // console.log(this.props.navigation, 'Navigation')
                    // this.props.navigation.navigate('HomeScreen')
                    this.props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: 'HomeScreen' }
                            ],
                        })
                    )
                    :
                    // console.log(this.props.navigation, 'Navigation')
                    // this.props.navigation.navigate('LoginScreen');
                    this.props.navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [
                                { name: 'LoginScreen' }
                            ],
                        })
                    )
            }
        }, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 600, height: 500 }}
                    source={require('./../assets/logo.png')}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});
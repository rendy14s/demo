/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth'

export class Login extends Component {


    signIn = async () => {
        try {
            await auth().signInAnonymously()
        } catch (e) {
            switch (e.code) {
                case 'auth/operation-not-allowed':
                    console.log('Enable anonymous in your firebase console.')
                    break
                default:
                    console.error(e)
                    break
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
                <Image
                    style={{ width: 300, height: 200 }}
                    source={require('./../assets/logo.png')}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn.bind(this)}
                >
                    <Text style={styles.buttonText}>Login Anonymous </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        marginTop: 20,
        marginBottom: 30,
        fontSize: 28,
        fontWeight: '500',
        color: '#f48b12'
    },
    button: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ee411e'
    },
    buttonText: {
        color: '#ffe2ff',
        fontSize: 24,
        marginRight: 5
    }
});
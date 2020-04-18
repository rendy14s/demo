/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export class Profile extends Component {

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
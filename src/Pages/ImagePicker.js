/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class ImagePicker extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> Image Picker Page </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

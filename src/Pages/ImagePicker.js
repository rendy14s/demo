/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';


export class ImagePickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: ''
        }
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    photo: source
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.photo === '' ?
                        <Image
                            style={{ width: 300, height: 200 }}
                            source={require('./../assets/logo.png')}
                        />
                        :
                        <Image
                            style={{ height: 200, width: 300 }}
                            source={this.state.photo}
                        />
                }
                <TouchableOpacity style={styles.button} onPress={this.selectPhotoTapped.bind(this)}>
                    <Text style={styles.buttonText}>Ambil Gambar</Text>
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
    buttonText: {
        color: '#ffe2ff',
        fontSize: 24,
        marginRight: 5
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
    }
});


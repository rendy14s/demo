/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import numeral from 'numeral';


//Action
import axios from 'axios';
import { IPSERVER, REQUEST_TIME_OUT } from './../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: '',
            loading: true
        }
    }


    componentDidMount() {
        axios.post(`${IPSERVER}`, {
            timeout: REQUEST_TIME_OUT
        })
            .then(response => this.setState({ data: response.data, loading: false }))
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.data);
        const { data, loading } = this.state;
        return (
            <View style={styles.container}>
                {
                    loading ?
                        <ActivityIndicator size="small" color="#00ff00" />
                        :
                        <View>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('DetailScreen') }}
                            >

                                <ListItem
                                    title='Confirmed'
                                    subtitle={numeral(data.confirmed.value).format('0,0')}
                                    leftIcon={
                                        <Icon name="rocket" size={30} color="#900" />
                                    }
                                    bottomDivider
                                />
                            </TouchableOpacity>

                            {/* <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('DetailScreen') }}
                            >
                                <ListItem
                                    title='Recovered'
                                    subtitle={numeral(data.recovered.value).format('0,0')}
                                    leftIcon={
                                        <Icon name="ambulance" size={30} color="#900" />
                                    }
                                    bottomDivider
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('DetailScreen') }}
                            >
                                <ListItem
                                    title='Deaths'
                                    subtitle={numeral(data.deaths.value).format('0,0')}
                                    leftIcon={
                                        <Icon name="heartbeat" size={30} color="#900" />
                                    }
                                    bottomDivider
                                />
                            </TouchableOpacity> */}
                        </View>
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

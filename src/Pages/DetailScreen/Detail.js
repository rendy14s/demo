/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import axios from 'axios';
import { IPSERVER, REQUEST_TIME_OUT } from './../../config/config';
import numeral from 'numeral';


export class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataDetail: [],
            loading: true
        }
    }


    componentDidMount() {
        axios.post(`${IPSERVER}confirmed`, {
            timeout: REQUEST_TIME_OUT
        })
            .then(response => this.setState({ dataDetail: response.data, loading: false }))
            .catch(error => console.log(error))
    }


    renderCountry = (data) => {
        console.log(data, 'test');
        return (
            <Card title={data.item.countryRegion}>
                <View>
                    <Text>Confirmed     : {numeral(data.item.confirmed).format('0,0')}</Text>
                    <Text>Recovered     : {numeral(data.item.recovered).format('0,0')}</Text>
                    <Text>Deaths        : {numeral(data.item.deaths).format('0,0')}</Text>
                    <Text>Active Case   : {numeral(data.item.active).format('0,0')}</Text>
                </View>
            </Card>
        )
    }

    render() {
        console.log(this.state.dataDetail, 'Data Detail');
        const { dataDetail, loading } = this.state;
        return (
            <View style={styles.container}>
                {
                    loading ?
                        <ActivityIndicator size="small" color="#00ff00" />
                        :
                        <View>
                            <FlatList
                                data={dataDetail}
                                // contentContainerStyle={styles.list}
                                renderItem={this.renderCountry}
                                showsHorizontalScrollIndicator={false}
                            />
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


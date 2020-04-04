import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './../Pages/Home';
import { News } from './../Pages/News';
import { Profile } from './../Pages/Profile';

const Stack = createStackNavigator();

// function MainStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="HomeScreen" component={Home} />
//             <Stack.Screen name="NewsScreen" component={News} />
//             <Stack.Screen name="ProfileScreen" component={Profile} />
//         </Stack.Navigator>
//     );
// }

const MainStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="NewsScreen" component={News} />
        <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>)
}

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>

        );
    }
};
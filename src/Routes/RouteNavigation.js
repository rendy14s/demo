import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from './../Pages/Login';
import { Home } from './../Pages/Home';
import { News } from './../Pages/News';
import { Profile } from './../Pages/Profile';
import { ImagePickers } from './../Pages/ImagePicker';

const AuthContext = createContext(null)
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const ImagePickerScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ title: "Image Picker" }} name="ImagePickerScreen" component={ImagePickers} />
        </Stack.Navigator>
    );
}

const NewsScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ title: "News" }} name="News" component={News} />
        </Stack.Navigator>
    );
}

const ProfileScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ title: "Profile" }} name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const Routes = () => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)

    // Handle user state changes
    function onAuthStateChanged(result) {
        setUser(result)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)

        // unsubscribe on unmount
        return authSubscriber
    }, [])

    if (initializing) {
        return null
    }

    return user ? (
        <AuthContext.Provider value={user}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        options={{ drawerLabel: 'Home', title: 'Home' }}
                    />
                    <Drawer.Screen name="Image Picker" component={ImagePickerScreen} />
                    <Drawer.Screen name="News" component={NewsScreen} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    ) : (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen
                        name="LoginScreen"
                        component={Login}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
}

export default Routes;
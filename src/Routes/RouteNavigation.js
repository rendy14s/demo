import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Login } from './../Pages/Login';
import { Home } from './../Pages/Home';

const AuthContext = createContext(null)
const Stack = createStackNavigator()

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
                <Stack.Navigator>
                    <Stack.Screen
                        name="HomeScreen"
                        component={Home}
                        options={{
                            headerTitle: "Dashboard",
                            headerTitleAlign: 'center'
                        }}
                    />
                </Stack.Navigator>
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
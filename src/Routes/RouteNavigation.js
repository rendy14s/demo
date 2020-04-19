import React, { useState, useEffect, createContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Login } from './../Pages/Login';
import { Home } from './../Pages/Home';
import { News } from './../Pages/News';
import { Profile } from './../Pages/Profile';

const AuthContext = createContext(null)
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

// const Pages = () => {
//     return (
//         <Stack.Navigator>
//             {/* <Stack.Screen name="Home" component={Home} /> */}
//             <Stack.Screen name="News" component={News} />
//             <Stack.Screen name="Profile" component={Profile} />
//         </Stack.Navigator>
//     );
// }

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
                <Drawer.Navigator>
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        options={{ drawerLabel: 'Home', title: 'Home' }}
                    />
                    <Drawer.Screen
                        name="News"
                        component={News}
                        options={{ drawerLabel: 'News', title: 'News' }}
                    />
                    <Drawer.Screen
                        name="Profile"
                        component={Profile}
                        options={{ drawerLabel: 'Profile', title: 'Profile' }}
                    />
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
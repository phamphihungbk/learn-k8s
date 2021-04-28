import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from "./src/containers/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <HomeScreen/>
                    <StatusBar/>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import HomeScreen from './src/containers/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SubmitScreen from './src/containers/SubmitScreen';

// Styles for the whole application
const theme = {};

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <StatusBar/>
                    <SubmitScreen/>
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

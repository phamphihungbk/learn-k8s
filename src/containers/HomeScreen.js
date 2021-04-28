import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QrCode from "./QrCode";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="QrCode" component={QrCode} />
        </Tab.Navigator>
    );
}

export default HomeScreen;

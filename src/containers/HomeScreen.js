import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrCode from "./QrCode";
import AppHeader from "../components/Header";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <View>
            <AppHeader />
            <Page>
                <Tab.Navigator>
                    <Tab.Screen name="Home" options={{tabBarIcon: () => <Text>🖥</Text>}} component={HomeScreen}/>
                    <Tab.Screen name="QrCode" options={{tabBarIcon: () => <Text>📱</Text>}} component={QrCode}/>
                </Tab.Navigator>
            </Page>
        </View>
    );
}

export default HomeScreen;

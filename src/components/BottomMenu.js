import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';
import ResultScreen from '../containers/ResultScreen';
import SubmitScreen from '../containers/SubmitScreen';

const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" options={{tabBarIcon: () => <Text>🖥</Text>}} component={HomeScreen}/>
            <Tab.Screen name="SubmitScreen" options={{tabBarIcon: () => <Text>📱</Text>}} component={SubmitScreen}/>
            <Tab.Screen name="ResultScreen" options={{tabBarIcon: () => <Text>📱</Text>}} component={ResultScreen}/>
        </Tab.Navigator>
    );
}

export default BottomMenu;

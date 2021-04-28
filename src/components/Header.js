import {Text} from "react-native";
import React from "react";
import {Header} from 'react-native-elements';

const AppHeader = () => {
    return (
        <Header centerComponent={{text: 'Welcome to Tinny App', style: {color: '#fff'}}}/>
    );
}

export default AppHeader;
import React from 'react';
import {View} from 'react-native';
import AppHeader from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import styled from 'styled-components'

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`

const SubmitScreen = () => {
    return (
        <View>
            <AppHeader/>
            <Page>
                <Input placeholder='Full name'/>
                <Input placeholder='Mobile phone'/>
                <Input placeholder='Facebook url'/>
                <Input placeholder='Whatsapp number'/>
            </Page>
        </View>
    );
}

export default SubmitScreen;

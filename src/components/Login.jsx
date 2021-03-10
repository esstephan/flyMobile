import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class LoginScreen extends Component {
    render () {
        return (
            <SafeAreaView>
            <View>
                <Text>{'This will be a login screen'}</Text>
            </View>
            </SafeAreaView>
        )
    }
}

export default LoginScreen;
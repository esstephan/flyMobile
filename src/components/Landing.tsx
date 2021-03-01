import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Alert, SafeAreaView } from 'react-native';
import Colors from './common/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 

    backgroundImage: {
        flex: 1, 
    },

    buttonSection: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    spacerSection: {
        flex: 5,
    },

    signupButton: {
        paddingHorizontal:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: Colors.darkBlue,
        borderRadius:10,
    },

    signupButtonText: {
        color: Colors.white,
    },

    loginButton: {
        marginTop: 10,
    },

    loginButtonText: { 
        color: Colors.darkBlue,
    },

    pigeon: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
}) 

class Landing extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image style={styles.backgroundImage} source={require('../images/hero.jpg')} />
                </View>
                <View style={styles.buttonSection} >
                    <Image style={styles.pigeon} source={require('../images/pigeon4.png')} />
                    <TouchableOpacity
                        style={styles.signupButton}
                        onPress={this._onSignupPress}
                    >
                        <Text style={styles.signupButtonText}>{'Take flight'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this._onLoginPress}
                    >
                        <Text style={styles.loginButtonText}>{'Login'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.spacerSection} />
            </View>
        );
    }

    _onSignupPress() {
        Alert.alert('This will do something soon');
    }

    _onLoginPress() {
        Alert.alert('You are not cool enough to log in');
    }

}

export default Landing;
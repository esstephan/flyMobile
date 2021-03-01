import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import Colors from './common/Colors';
import axios from 'axios';
import { db } from '../../config';

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10, 
    },

    header: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 20,
        alignSelf: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        color: Colors.dark,
    },

    birdContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingLeft: 20,
    },

    bird: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        paddingLeft: 15,
        fontSize: 24,
    },

    addButton: {
        marginHorizontal:80,
        marginTop:40,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: Colors.dark,
        borderRadius:10,
    },

    addButtonText: {
        color: Colors.white,
        alignSelf: 'center',
    },

})

type Bird = {
    id: string,
    name: string,
    uri: string,
    status: string,
    speed: number,
}

class Birds extends Component {

    state = {
        birds: [],
    }

    componentDidMount() {
        db.collection("birds")
        .get()
        .then((querySnapshot: any[]) => {
            let birds = new Array<Bird>();
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                let bird = {
                    id: doc.id,
                    ...doc.data()
                }
                birds.push(bird);
            });
            this.setState({birds})
        })
        .catch((error: Error) => {
            console.log("Error getting documents: ", error);
        });
    }
    
    render(){
        return (
            <SafeAreaView>
                <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{'AVAILABLE BIRDS'}</Text>
                </View>
                    {this.state.birds.map((bird) => this._renderBird(bird))}
                </ScrollView>
                <TouchableOpacity
                        style={styles.addButton}
                        onPress={this._addBird}
                    >
                        <Text style={styles.addButtonText}>{'Add a random bird'}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    _renderBird = (bird: Bird) => {    
        return (
            <TouchableOpacity onPress={() => this._onPress(bird)} style={styles.birdContainer} key={bird.id}>
                <Image style={{width: 70, height: 70, borderRadius: 30}} source={{uri: bird.uri}} />
                <View style={styles.bird}> 
                    <Text style={styles.title}>{bird.name}</Text> 
                </View>
            </TouchableOpacity>
        );
      };

    _onPress = (bird: Bird) => {
        const speed = bird.speed || 60;
        alert(`${bird.name} can fly ${speed} mph. Try them out!`);
    }  

     _addBird = async() => {
        // get a random bird photo
        let uri;
        try {
            uri = await this._getBirdPhoto()
        }
        catch (err) {
            console.log('error getting bird photo', err);
        }

        //TODO: Dedupe photo IDs
        db.collection("birds").add({
            name: 'Birdie',
            uri,
            status: 'active',
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error: Error) => {
            console.error("Error writing document: ", error);
        });
    }

    // helpers

    _getBirdPhoto = async (): Promise<string> => {
        try {
            const response = await axios.get('http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true');
            return response.data[0] // the response is an Array, so just use the first item as the uri
                ;
        } catch (err) {
            return err;
        }
        }  
}

export default Birds;
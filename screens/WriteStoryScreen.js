import * as React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native'
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import AppHeader from './AppHeader'

export default class WriteStoryScreen extends React.Component{
    render(){
        return (
            <View>
                <AppHeader/>
                <TextInput style={styles.inputBox}
                placeholder="Story Title"/>

                <TextInput style={styles.inputBox}
                placeholder="Author"/>

                <TextInput style={styles.bigInput}
                placeholder="Write Your Story"
                multiline
                numberOfLines={5}/>
                
                <TouchableOpacity style={styles.submitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        borderWidth:1.5,
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        margin:20,
    },
    submitButton:{
        backgroundColor:'pink',
        padding:10,
        margin:10,
        justifyContent:'center',
    },
    bigInput:{
        borderWidth:1.5,
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        margin:20,
    }
})
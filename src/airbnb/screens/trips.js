import React,{Component  } from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Trips extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <View style={styles.container}>
               <Text >Trips</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})
import React,{Component  } from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Inbox extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <View style={styles.container}>
               <Text >Inbox</Text>
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
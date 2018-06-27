import React,{Component  } from "react";
import { Text,View,StyleSheet,SafeAreaView,TextInput,Platform ,Image,StatusBar} from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
//SafeAreaView to make area not getting under iphoneX

export default class Explore extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.startHeaderHeight = 80;
        if(Platform.OS === 'android'){
            this.startHeaderHeight = 100+ StatusBar.currentHeight;
        }
    }
    render(){
        return (
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
            <View style={{height:this.startHeaderHeight,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'gray'}}>
            <View style={{flexDirection:'row',padding:10,shadowColor:'black',
            backgroundColor:'white',shadowOffset:{height:0,width:0},shadowOpacity:0.2,marginHorizontal:20,marginVertical:20
            ,elevation:1,marginTop: Platform.OS==='android'?30:null}}>
            <Image source={require('../assets/search.jpg')} style={{height:24,width:24}}/>
                <TextInput placeholder='Try New Delhi'
                placeholderTextColor='grey'
                underlineColorAndroid='transparent'
                style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
                />
            </View>
            </View>
            </View>

            </SafeAreaView>
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
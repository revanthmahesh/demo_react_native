import React,{Component} from "react";
import { Text,View,AppRegistry,StyleSheet,ScrollView } from "react-native";
import Multiple from './multipleView';
import  Contacts from "./contacts";
import RegForm from './tcombForm';
import Switcher from "./switch";
import  Select  from "./select";
const count = new Array(20)
export default class MyApp extends Component{
    constructor(){
        super();
    }

    render(){
      const show =[]  
      for (let i = 0; i < count.length; i++) {
        //    show[i] = <Contacts key={i+1} index={i}/>;
        show[i] = <Contacts key={i+1} index={i}/>;
          
      }
        return(
            <View>
              <RegForm />
              <Switcher/>
              <Select/>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    red:{
        backgroundColor:'red',
        height:150
    },
    green:{
        backgroundColor:'green',
        height:200
    },
    horizontal:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        overflow:'scroll',
        flexGrow:1
    },
    contacts:{
        flexDirection:'column',
    }
})
    /* <ScrollView>
              <View style={styles.red}></View>
              <View style={styles.green}></View>
              <View style={styles.horizontal}>{show}</View>
              <View style={styles.contacts}>{show}</View>
              </ScrollView> */
AppRegistry.registerComponent('MyApp',()=>MyApp)
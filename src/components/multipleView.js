import React,{Component} from "react";
import { Text,View,AppRegistry } from "react-native";

export default class Multiple extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={{width: 100, height: 100,margin:1.3, backgroundColor: 'powderblue'}}>
               <Text>{this.props.index}</Text>
           </View>
        )
    }
}
AppRegistry.registerComponent('Multiple',()=>Multiple)
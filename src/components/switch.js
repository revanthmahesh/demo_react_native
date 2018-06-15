import React,{Component} from "react";
import { View,Switch,TextInput } from "react-native";

export default class Switcher extends Component {
    constructor(){
        super();
        this.state ={val1: false, val2 : true }
    }
    change1 = (value) =>{
        this.setState({val1: value})
    }
    change2 = (value) =>{
        this.setState({val2: value})
    }
    render(){
        return(
            <View>
                <Switch value={this.state.val1} onValueChange={this.change1} />
                <Switch value={this.state.val2} onValueChange={this.change2} />
                {/* <Switch value={this.state.val2} onValueChange={this.change('Val2')} /> */}
            </View>
        )
    }
}
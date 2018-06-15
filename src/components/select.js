import React,{Component} from "react";
import { View,Switch,Picker } from "react-native";
const arr = [{value:'revanth', label:'revanth'}, {value:'mahesh', label:'mahesh'},{value:'kumar', label:'kumar'}];


export default class Select extends Component {
    constructor(){
        super();
        this.state ={value: 'revanth'}
    }
    change = (value) =>{
        this.setState({value: value})
    }
    render(){
        return(
            <View>
               <Picker selectedValue ={this.state.value} onValueChange={this.change}>
               {arr.map(ele=>(<Picker.Item key={ele.value} {...ele} />))}
               </Picker>
            </View>
        )
    }
}
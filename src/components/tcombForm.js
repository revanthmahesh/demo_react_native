import React,{ Component } from "react";
import { Text,View,AppRegistry,StyleSheet,Button } from "react-native";
import t from 'tcomb-form-native'; 
const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    username: t.maybe(t.String),
    password: t.String,
    age: t.Number,
    terms: t.Boolean,
    birthDate: t.Date 
})
const options ={
    fields:{
        email:{
            error:'Please enter valid email'
        },
        password:{
            error:'Please enter valid password'
        },
        terms:{
            label:'Agree to Terms'
        }
    }
}

export default class RegForm extends Component{
    constructor(){
        super();
    }
    onChange = (value)=>{
          console.log('change',value)
    }
    handleSubmit = ()=>{
     console.log('data:',this.userForm.getValue())
    }
    render(){
        return(
            <View style={styles.container}>
            <View>
            <Form type={User} options={options} ref={c=>this.userForm=c} onChange={this.onChange}/> 
            <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
            </View>
             
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });
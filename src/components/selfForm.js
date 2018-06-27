import React, {Component} from 'react'
import {View, Button} from 'react-native'

import TextField from './textFiled'
import validate from './formValidation'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }
  }
  emailBlur = () =>{
    this.setState({
      emailError: validate('email', this.state.email)
    })
  }
  passwordBlur = ()=>{
    this.setState({
      passwordError: validate('password', this.state.password)
    })
  }
  register = () => {
    console.log(this.refElement)
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if(emailError){
      this.emailRef.focus();
    }else if(passwordError){
      this.passwordRef.focus();
    }

    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }

  render() {
    return (
      <View >
        <TextField
          ref ={(el) => this.emailRef =el}
          onChangeText={value => this.setState({email: value.trim()})}
          onBlur={this.emailBlur}
          error={this.state.emailError}/>

        <TextField
          ref ={(el) => this.passwordRef=el}
          onChangeText={value => this.setState({password: value.trim()})}
          onBlur={this.passwordBlur}
          error={this.state.passwordError}
          secureTextEntry={true}/>

        <Button
          title='Register'
          onPress={this.register}/>

      </View>
    )
  }
}
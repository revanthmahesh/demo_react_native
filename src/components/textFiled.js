import React,{Component} from 'react'
import { View, TextInput, Text } from 'react-native'
export default class TextField extends Component {
  constructor(){
    super()
  }
  render(){
    const props = this.props;
    return(
      <View>
      <TextInput onBlur={props.onBlur} onFocus={props.onFocus}/>
      {props.error ? <Text>{props.error}</Text> : null}
    </View>
    )
  }
}

// const TextField = props => (
  
// )

// export default TextField
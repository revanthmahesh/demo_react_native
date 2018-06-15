import React,{Component} from "react";
import { Text,View,AppRegistry,StyleSheet,Image } from "react-native";

export default class Contacts extends Component{
    constructor(){
        super();
    }

    render(){
        const childStyle = this.props.index%2 ? styles.odd : styles.even
        return(
            <View style={styles.outerChild} >
            <View style={childStyle}>
            <Image style={{width: 50, height: 50, margin:2}}
               source={{uri: 'https://pta-security.nl/wp-content/uploads/2014/11/official-icon.png'}} />
            <Text style={{paddingTop:20,paddingBottom:20,}}>Contact</Text>   
        </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    outerChild:{
        margin:8,
        marginLeft:3,
        marginRight:10,
        backgroundColor:'powderblue'
    },
    image:{
        borderRadius:1
    },
    odd:{
        'flexDirection': 'row',
        'alignItems': 'flex-start'
    },
    even:{
        'flexDirection': 'row-reverse',
        'alignItems': 'flex-end'
    }
})
AppRegistry.registerComponent('Contacts',()=>Contacts)
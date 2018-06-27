import React,{Component  } from "react";
import { Text,View,StyleSheet ,Image} from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Explore from "./screens/explore";
import Inbox from "./screens/inbox";
import Save from "./screens/save";
import Trips from "./screens/trips";
import Profile from "./screens/trips";
// import Icon from 'react-native-vector-icons/Ionicons'
class MyApp extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <View style={styles.container}>
               <Text >Airbnb</Text>
            </View>
        )
    }
}

export default  createBottomTabNavigator({
    Explore:{
       screen:Explore,
       navigationOptions:{
           tabBarLabel:'EXPLORE',
           tabBarIcon:({tintColor})=>{
            <Image source={require('./assets/airbnb.jpg')} style={{height:24,width:24}}/>
           }
       }
    },
    Save:{
      screen:Save,
      navigationOptions:{
        tabBarLabel:'SAVE',
        tabBarIcon:({tintColor})=>{
            <Image source={require('./assets/airbnb.jpg')} style={{height:24,width:24,tintColor:tintColor}}/>
        }
    }
    },
    Trips:{
       screen: Trips,
       navigationOptions:{
        tabBarLabel:'TRIPS',
        tabBarIcon:({tintColor})=>{
           <Image source={require('./assets/airbnb.jpg')} style={{height:24,width:24,tintColor:tintColor}}/>
        }
    }
    },
    Inbox:{
       screen: Inbox,
       navigationOptions:{
        tabBarLabel:'INBOX',
        tabBarIcon:({tintColor})=>{
            <Image source={require('./assets/airbnb.jpg')} style={{height:24,width:24,tintColor:tintColor}}/>
        }
    }
    },
    Profile:{
        screen: Profile,
        navigationOptions:{
         tabBarLabel:'PROFILE',
         tabBarIcon:({tintColor})=>{
            <Image source={require('./assets/airbnb.jpg')} style={{height:24,width:24,tintColor:tintColor}}/>
         }
     }
     }
},{
        tabBarOptions:{
            activeTinitColor:'red',
            inactiveTintColor:'grey',
            style:{
                backgroundColor:'white',
                borderTopWidth:0,
                shadowOffset:{width:5,height:3},//ios
                shadowColor:'black',//ios
                shadowOpacity:0.5,//ios
                elevation:5
            }
        }
    }
)
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    }
})
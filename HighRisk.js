import React, {Component} from 'react';
import {Text, View, Stylesheet, TouchableHighlight,Button} from 'react-native';

import {createStackNavigator} from 'react-navigation'
export default class HighRisk extends Component{

    errormsg =() => {
        alert('Network error')
    }
    
    static navigationOptions = {
        title: 'Highrisk Sure odd'
    }
    render(){
        return(
            <View>
            
            <Text style={{marginTop:40,textAlign:'center',fontSize:50, marginLeft:10}}>BetSlip Number: Z77WYYSG </Text>

            
            <Text style={{marginTop:30, marginLeft:10, fontSize:20}}>The code above is of higher risk with good odd. If you are sure you can take the risk copy and play or copy and edit before playing. wishing you happy winning.</Text>
           
            
            
            
            
            </View>
        );
    }
}
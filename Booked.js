import React, {Component} from 'react';
import {Text, View, Stylesheet, TouchableHighlight,Button} from 'react-native';

import {createStackNavigator} from 'react-navigation'
export default class HighRisk extends Component{

    errormsg =() => {
        alert('Network error')
    }
    
    static navigationOptions = {
        title: 'Booked game'
    }
    render(){
        return(
            <View style={{backgroundColor:'green'}}>
            
            <Text style={{marginTop:40,textAlign:'center',fontSize:50, marginLeft:10}}>BetSlip Number: Z77WYYSG </Text>

            
            <Text style={{marginTop:30, marginLeft:10, fontSize:20}}>We know that some of us actually dont have time to book a game on their own so we have come up with this page to post to you a booked game you can copy and play instantly. the condition is that it must be a bet9ja code, so if ok with it ther it is. </Text>
           
            
            
            
            
            </View>
        );
    }
}
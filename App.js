import React, {Component} from 'react';
import {Text, View, Stylesheet, TouchableHighlight, ScrollView,  Image } from 'react-native';
import Home from './Home';
import HighRisk from './HighRisk';
import Booked from './Booked';
import Played from './Played';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import {createStackNavigator} from 'react-navigation';
class App extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={{flex:1}}>

           
            <Home navigation = {this.props.navigation} />

            <ScrollView>
				<View style = {{marginTop:10, borderWidth:2,borderColor:'#fff',borderStyle:'solid',shadowOpacity:5 }}>
				<Image source={require('./images/uefa.png')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>EUROPE-Champions League Qual</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Ajax</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>
				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>


				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>Dynamo Kyiv</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip:1</Text>
				<Text>ODD: 1:65</Text>
				</View>
				</View>

				<View style = {{marginTop:10, borderWidth:2,borderColor:'white',borderStyle:'solid' }}>
				<Image source={require('./images/uefa.png')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>EUROPE-Champions League Qual</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Young boys</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>

				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>GNK Dinamo Zagreb</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip: Over 2 Goals</Text>
				<Text>ODD: 1.40</Text>
				</View>
				</View>
				
				<View style = {{marginTop:10, borderWidth:2,borderColor:'white',borderStyle:'solid' }}>
				<Image source={require('./images/england.jpeg')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>ENGLAND-Championship</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Aston Villa</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>

				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>Brentford</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip: over 2 goals</Text>
				<Text>ODD: 1.40</Text>
				</View>
				</View>

				<View style = {{marginTop:10, borderWidth:2,borderColor:'white',borderStyle:'solid' }}>
				<Image source={require('./images/denmark.png')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>DENMARK- 1st Division</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Naestved BK</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>

				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>HB Koge</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip:X2</Text>
				<Text>ODD: 1.40</Text>
				</View>
				</View>
				
				<View style = {{marginTop:10, borderWidth:2,borderColor:'white',borderStyle:'solid' }}>
				<Image source={require('./images/tunisia.png')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>TUNISIA- League 1</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Esperance Tunis</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>

				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>VS Tataovine</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip:1</Text>
				<Text>ODD: 1.30</Text>
				</View>
				</View>
				
				<View style = {{marginTop:10, borderWidth:2,borderColor:'white',borderStyle:'solid' }}>
				<Image source={require('./images/tunisia.png')} style ={{ width:30,height:20, position:'absolute',  marginLeft:3}}/>
				<View style ={{justifyContent:'space-between', borderBottomWidth:1, width:310, flexDirection:'row', marginLeft:40}}>
				<Text>TUNISIA-League 1</Text>
				<Text>22 AUG</Text>
				</View>

				<Text style ={{ width:30,height:35, position:'absolute',  marginLeft:3, marginTop:30}}>20:00</Text>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>ES Sahel</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style={{marginLeft:325, position:'absolute', marginTop:37, borderRadius:100, backgroundColor:'black'}} >
				<Entypo name='controller-paus' size={20} color='yellow'/>
				</View>

				<View style ={{justifyContent:'space-between', borderBottomWidth:1, flexDirection:'row', width:310,  marginLeft:40, marginTop:20}}>
				<Text>JS Kairouanaise</Text>
				<Text style ={{marginRight:30}}>?</Text>
				</View>

				<View style ={{justifyContent:'space-between', flexDirection:'row', width:310,  marginLeft:40}}>
				<Text>Tip:1</Text>
				<Text>ODD: 1.30</Text>
				</View>
				</View>
			</ScrollView>
            

            
            
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        HomeScreen: App,
        HighRiskScreen: HighRisk,
        BookedScreen: Booked,
        PlayedScreen: Played,
       
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

export default RootStack;
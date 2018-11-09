<<<<<<< HEAD

import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, ScrollView,Image,DrawerLayoutAndroid} from 'react-native';
import {Label} from 'native-base';
import { Ionicons, FontAwesome, Entypo, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Card } from 'antd-mobile-rn';
import Menu from './Menu'
import Header from './Header';
import { createStackNavigator } from 'react-navigation';
import Fixtures from './Fixtures';
import Livescore from './Livescore'
import Players from './Players'
import Home from './Home'
import Countries from './Countries'
import Standings from './Standings'
import Head2head from "./Head2head"
import Team from './Team'
import Videos from './Videos'
import Topscorers from './Topscorers'









class App extends React.Component {
  static navigationOptions = {
		header: null,
	}
  constructor(props) {
    super(props);
    this.state = { 
      
    }

  }


  static navigationOptions = {
    header: null
  }

  closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  handleMenu = () => {
    this.drawer.openDrawer();
  };

  render() {
    
    return (
   
      
      <View style={styles.mainBg}>
        <ScrollView> 
        <Header title = "Login" openSideBar={this.handleMenu}/>
        <View style = { styles.secondContainer }>
      
          <View style = { styles.thirdContainer }>
              <TextInput
                  style={[styles.textInput]}
                  placeholder='Username'
                  underlineColorAndroid='transparent'
              />
              <TextInput
                  style={[styles.textInput]}
                  placeholder='Password'
                  underlineColorAndroid='transparent'
              />
              
              <View style = { styles.loginSignUp }>
              <TouchableOpacity style={styles.buttonView} onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
                
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

               <TouchableOpacity style={[styles.buttonView,  { backgroundColor: 'transparent',}]} >
              
                <Text style={[styles.buttonText, {color: '#1890ff'}]}>Sign up</Text>
              </TouchableOpacity>
              </View>

              <TouchableOpacity style={[styles.buttonView,  { backgroundColor: 'transparent',  width: '100%'}]} onPress={this.login}>
                <Text style={[styles.buttonText, {color: '#1890ff'}]}>Forgot Password?</Text>
              </TouchableOpacity>
             
          </View>
        
        </View>
      </ScrollView> 
      </View>
     
   
     
    );
  }
}

const RootStack = createStackNavigator(
  {
    LoginScreen: App,
		HomeScreen: Home,
		FixtureScreen: Fixtures,
		Head2headScreen: Head2head,
		TeamScreen: Team,
    PlayerScreen: Players,
    CountryScreen: Countries,
    LivescoreScreen: Livescore,
    StandingsScreen: Standings,
    TopscorersScreen: Topscorers,
    VideoScreen: Videos
  },

  {
    initialRouteName: 'LoginScreen',
  }
)


const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: "#001e32",
    marginBottom: 1
  },
  secondContainer: {
    backgroundColor: 'white',
    width: '95%',
    marginTop: 30,
    height: 500,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  thirdContainer: {
    backgroundColor: '#001e32',
    width: '90%',
    height: 350,
    margin: 16,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  textInput: {
		backgroundColor:'white',
		borderWidth: 1,
		margin: 10,
		width: '52%',
    padding: 5,
    borderRadius: 5,
    borderColor: '#1890ff',
    width: '90%',
    height: 50,
  },
  buttonView:{
		borderRadius:10,
    flexDirection: 'row',
    justifyContent: 'center',
		height: 50,
		width: '47%',
		margin: 20,
		backgroundColor:'#1890ff',
		borderColor:'white',
  },
  icon: {
    position: 'relative',
		padding:10
  },
  buttonText:{
		fontWeight:'bold',
		fontSize:18,
		position: 'relative',
		top: 4,
		padding:10,
		color:'white'
  },
  loginSignUp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%'
  }
  
});

export default RootStack;

||||||| merged common ancestors
=======
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
>>>>>>> 30e17ab13d857cdf04485a54259f62db4654b608

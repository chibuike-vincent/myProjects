
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


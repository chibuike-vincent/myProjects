

import React from 'react';
import { View, StyleSheet, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, TouchableOpacity,TextInput, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Card } from 'antd-mobile-rn';
import Header from './Header';
import Menu from './Menu';

export default class Topscorers extends React.Component {
  static navigationOptions= {
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

      <DrawerLayoutAndroid
      ref={(ref) => { this.drawer = ref; }}
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => <Menu
        onClose={this.closeDrawer}
        navigator={this.navigator}
        navigation={this.props.navigation} />}>
     

          <View style={styles.mainBg}>

        
        <Header title = 'Top scorers' openSideBar={this.handleMenu} />

      <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View style={styles.container}>



       
        <Card style={styles.card}>
          
        
        </Card>


      </View>
      </ScrollView>
      </View>
      </DrawerLayoutAndroid>

     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  headerNav:{
    backgroundColor: '#1890ff',
    alignItems: 'center',
    borderBottomColor:'#ffffff',
    borderBottomWidth:0.5,
    height: 76,
    width: '100%',
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingTop: 20
  },
  inventory:{
    fontSize: 28,
    fontWeight:'bold',
    color:'white',
    marginLeft: '10%'
  },
  card: {
    marginTop: '4%',
    marginLeft: '6%',
    marginRight: '6%',
    marginBottom: '3%'
  },
  mainBg: {
    backgroundColor: "#e5e5e5",
    flex: 1
  }
});


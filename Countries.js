import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, Picker } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Card } from 'antd-mobile-rn';
import { EvilIcons } from "@expo/vector-icons"
import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import {
  Item,
  Label,
  Input
} from 'native-base';
import Header from "./Header";
import Menu from "./Menu"
// import DailyAccount from './DailyAccount';
// import DatePicker from './DatePicker'
export default class Countries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: '',

      person: '',
      daily_shift: ''
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

      <DrawerLayoutAndroid
        ref={(ref) => { this.drawer = ref; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu
          onClose={this.closeDrawer}
          navigator={this.navigator}
          navigation={this.props.navigation} />}>

        <View style={styles.mainBg}>
          <Header title="Countries" openSideBar={this.handleMenu} />

          <ScrollView>
            
            <Card style={styles.AddCard}>

             
              <Card style={styles.AddCard}>
                <View style={styles.inputView}>
                  <Label style={styles.products}>Joy Soap</Label>
                  <Text style={styles.products}>#5</Text>
                  <Text style={styles.products}>5</Text>
                  <Text style={styles.products}>$10</Text>
                </View>
              </Card>
  
            </Card>
          </ScrollView>
        </View>
      </DrawerLayoutAndroid>


    );
  }
}

const styles = StyleSheet.create({
  mainBg: {
    backgroundColor: "#e5e5e5",
    flex: 1
  },
  InputCard: {
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  inputView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  Label: {
    marginTop: 25,
    marginLeft: 10,
  },
  dateInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#1890ff",
    marginTop: 10,
    width: "65%",
    marginLeft: 63,
    borderRadius: 5,
    marginRight: 10
  },
  personInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#1890ff",
    marginTop: 10,
    width: "65%",
    marginLeft: 10,
    borderRadius: 5,

  },
  shiftInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#1890ff",
    marginTop: 10,
    width: "65%",
    marginLeft: 60,
    borderRadius: 5,

  },
  AddCard: {
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: "#1890ff",
    width: 100,
    marginTop: -35,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30
  },
  mainInputView: {
    flexDirection: "row",
    width: '100%'
  },
  total: {
    fontWeight: 'bold',
    marginTop: 7,
    backgroundColor: 'lightgray'
  },
  products: {
    marginTop: 7
  }
})


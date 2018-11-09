

import React from 'react';
import { View, StyleSheet, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, TouchableOpacity,TextInput, Picker } from 'react-native';
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import { Card } from 'antd-mobile-rn';
import Header from './Header';
import Menu from "./Menu"

export default class Head2head extends React.Component {
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
      <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={200}>

        <ScrollView keyboardShouldPersistTaps={'handled'}>

          <View style={styles.mainBg}>
            <Header title="Head 2 Head (H2H)" openSideBar={this.handleMenu} />




            <View>
              <Card style={styles.InputCard}>
              </Card>

            </View>

          </View>


        </ScrollView>

      </KeyboardAvoidingView>

    </DrawerLayoutAndroid>

    );
  }
}


const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainIcon: {
    width: '30%',
  },
  main1: {
    flexDirection: 'column',
    width: '75%',
    marginTop: '2%',
  },
  main2: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 17,
  },
  one :{
    width: '50%',
  },
  two :{
    width: '40%',
  },
  card1:  {
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
  },
  icons: {
    marginTop: 4
  }
});


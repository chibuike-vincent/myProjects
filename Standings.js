

import React from 'react';
import { View, StyleSheet, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, TouchableOpacity,TextInput, Picker } from 'react-native';
import { Card } from 'antd-mobile-rn';
import Header from './Header';
import Menu from "./Menu"

export default class Standings extends React.Component {
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
            <Header title="Standings" openSideBar={this.handleMenu} />




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
  icons: {
    margin: 0,
    marginRight: '12%',
    marginLeft: '12%'
  },
  amount: {
    backgroundColor: '#fbf9ff',
    padding: '4%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    flexDirection: 'column',
  },
  first :{
    flexDirection: 'row',
    width: '100%',
    paddingBottom: '2%'
  },
  second: {
    width: '48%',
  },
  third: {
    width: '40%',
  },
figure: {
  fontWeight: 'bold',
  marginLeft: 12,
  marginTop: 5
},
text: {
  fontSize: 18
}
});


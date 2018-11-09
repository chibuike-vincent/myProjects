

import React from 'react';
import { View, StyleSheet, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, TouchableOpacity,TextInput, Picker, Card } from 'react-native';
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import Header from './Header';
import Menu from "./Menu"

export default class Videos extends React.Component {
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
            <Header title= "Videos" openSideBar={this.handleMenu} />

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
 searchBar: {
    flexDirection: 'row',
    width: '98%',
    marginTop: '7%',
    borderWidth: 0.7,
    borderColor: '#182099',
    borderRadius: 5,
    margin: 5,
    height:40
  },
  textInput: {
    borderWidth: 0,
    margin: 0,
    width: '80%',
    height: '100%',
    paddingBottom: '5%',
    borderRadius: 5,
    paddingLeft: '2%'
  },
  searchIconDiv: {
    backgroundColor: '#1890ff',
    width: '20%',
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    height: 40

  },
  icons: {
    margin: 0,
    marginTop: '8%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
 
});


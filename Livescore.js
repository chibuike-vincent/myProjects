import React from 'react';
import { View, StyleSheet, Text, ScrollView, DrawerLayoutAndroid, KeyboardAvoidingView, TouchableOpacity,TextInput, Picker } from 'react-native';
import Menu from './Menu';
import Header from './Header';
import { MaterialIcons } from "@expo/vector-icons"
class Livescore extends React.Component {
 

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
            <Header title="Live scores" openSideBar={this.handleMenu} />




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

export default Livescore;



const styles = StyleSheet.create({

  mainBg: {
    flex: 1

  },
  dateIcon: {
    marginLeft: '83%',
    width: 50,
   

  },
  dateText: {
    marginTop: -30
  }



})
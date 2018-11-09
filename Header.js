import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import modal from './modal'

class Header extends React.Component {
 
  render() {
    return (
      <View style={styles.header}>
        <View style={{display: this.props.menuStatus}}>
          <TouchableOpacity onPress={this.props.openSideBar} style={{padding: 3}}>
            <Ionicons name="md-menu" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.headerTitle}>
          {this.props.title}
          </Text>
        </View>
        <modal />
      </View>
    );
  }
}
export default Header;
 //body:#001e32; header:#003457;
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003457",
    flexDirection: "row",
    paddingTop: 35,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    
  },

  headerTitle: {
    color: "white",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 3
  },

  titleWrapper: {
    marginTop: 3,
    width: "100%",
    marginLeft: 20
  }
})
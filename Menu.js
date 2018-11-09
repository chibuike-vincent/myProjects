import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome,Entypo } from '@expo/vector-icons';



class Menu extends React.Component {

  render() {

    return (
      <View style={styles.menuWrapper}>

        <TouchableNativeFeedback onPress={() => { this.props.navigation.navigate('CountryScreen'); this.props.onClose() }}>
          <View style={styles.menuHeader}>
            <Ionicons name="md-information-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Countries</Text>
          </View>
        </TouchableNativeFeedback>
       
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('FixtureScreen'); this.props.onClose() }}>
          <View style={styles.menuHeader}>
            <MaterialIcons name="store" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Fixtures</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Head2headScreen'); this.props.onClose() }}>
          <View style={styles.menuHeader}>
            <Ionicons name="md-add-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Head 2 Head (H2H)</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LivescoreScreen'); this.props.onClose() }}>
          <View style={styles.menuHeader}>
            <FontAwesome name="send" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Live Score</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('StandingsScreen')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Standings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('TopscorersScreen')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Top Scorers</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('TeamScreen')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Team</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PlayerScreen')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Players</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoScreen')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Videos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Help</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
          <View style={styles.menuHeader}>
            <Entypo name="info-with-circle" size={25} color="white" style={styles.iconOthers} />
            <Text style={styles.menuTextOthers}>Settings</Text>
          </View>
        </TouchableOpacity>


      </View>
    )
  }

}

export default Menu;

const styles = StyleSheet.create({
  menuWrapper: {
    paddingTop: 30,
    backgroundColor: "#001e32",
    flex: 1,
  },
  menuHeader: {
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    flexDirection: "row",
    borderBottomWidth: 1,
  },


  menuTextOthers: {
    color: "white",
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 12,
    marginBottom: 16
  },

  icon: {
    paddingLeft: 20,
    marginTop: 5
  },

  iconOthers: {
    paddingLeft: 20,
    marginTop: 12
  },

  white: {
    color: "white"
  }

})
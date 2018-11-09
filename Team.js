import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView,  DrawerLayoutAndroid } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Card } from 'antd-mobile-rn';
import { BarCodeScanner, Permissions } from 'expo';

import { EvilIcons } from "@expo/vector-icons"
import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Label } from 'native-base';
import Header from "./Header";
import Menu from "./Menu";



export default class Team extends Component {
	

	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
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
        ref={(ref) => {this.drawer = ref;}}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu 
          onClose={this.closeDrawer} 
          navigator={this.navigator} 
          navigation={this.props.navigation}/>}>
					
        <View style={styles.mainBg}>
					<Header title = "Team" openSideBar={this.handleMenu}/>
					<ScrollView>
					<KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={50}>	
			<View
				style={{}}>
						<Card style={styles.InputCard}>
						
							<View style={styles.buttonView}>
								<TouchableOpacity style={styles.button1} >
									<Entypo name="shopping-cart" size={20} color="#ffffff" style={styles.buttonIcon1} />
									<Text style={styles.buttonText1} >Sell</Text>
								</TouchableOpacity>

								<TouchableOpacity style={styles.button2} >
									<MaterialIcons name="cancel" size={20} color="#ffffff" style={styles.buttonIcon2} />
									<Text style={styles.buttonText2} >Cancel</Text>
								</TouchableOpacity>
							</View>

							
						</Card>


						
					
						
			</View>
			
			</KeyboardAvoidingView>
			</ScrollView>
			</View>
			
       </DrawerLayoutAndroid>
      


		)
	}
}

const styles = StyleSheet.create({
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
		marginTop: 15,
		marginLeft: 10,
	},
	Input1: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "56%",
		marginLeft: 34,
		borderRadius: 5,
		padding:5
	},
	barcode: {
		marginTop: 10,
		width: 30,
		marginLeft: 5,
		marginRight: 10
	},
	Input2: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "68%",
		marginLeft: 20,
		borderRadius: 5,
		marginRight: 10
	},
	Input3: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10, width: "68%",
		marginLeft: 28,
		borderRadius: 5,
		marginRight: 10
	},
	Input4: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "68%",
		marginLeft: 52,
		borderRadius: 5,
		marginRight: 10
	},
	Input5: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "68%",
		marginLeft: 10,
		borderRadius: 5,
		marginRight: 10
	},
	buttonView: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		marginLeft: 10,
		marginTop: 20
	},
	button1: {
		flexDirection: "row",
		width: "30%",
		marginTop: 10,
		backgroundColor: "#1890ff",
		height: 40,
		borderRadius: 5
	},
	buttonIcon1: {
		marginTop: 10,
		marginLeft: 10
	},
	buttonText1: {
		marginTop: 1,
		color: "#ffffff",
		fontSize: 30,
		marginLeft: 10
	},
	button2: {
		flexDirection: "row",
		width: "30%",
		marginTop: 10,
		backgroundColor: "gray",
		height: 40,
		borderRadius: 5,
		marginRight: 10
	},
	buttonIcon2: {
		marginTop: 10,
		marginLeft: 5
	},
	buttonText2: {
		marginTop: 5,
		color: "#ffffff",
		fontSize: 20,
		marginLeft: 5
	},
	buttonView2: {
		width: "90%",
		alignSelf: "center"
	},
	button3: {
		flexDirection: "row",
		width: "100%",
		marginTop: 10,
		backgroundColor: "#1890ff",
		height: 40,
		borderRadius: 5,
		justifyContent: "center"
	},
	buttonIcon3: {
		marginTop: 5,
		marginLeft: 10,
		alignSelf: "center"
	},
	buttonText3: {
		marginTop: 1,
		color: "#ffffff",
		fontSize: 30,
		alignSelf: "center"
	},
	AddCard: {
		borderWidth: 1,
		marginTop: 15,
		marginLeft: 5,
		marginRight: 5,
	},
	images: {
		width: "30%",
		height: 100
	},
	editanddeleteIcon: {
		marginTop: 10,
		marginLeft: 10
	},
	productsHeadText: {
		marginTop: 1,
		fontSize: 20,
	},
	products: {
		marginTop: 1,
		fontSize: 16,
	},
	empty: {
		width: "100%",
		height: 10
	},
	mainBg: {
    backgroundColor: "#e5e5e5",
    flex: 1
  }
})
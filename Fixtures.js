import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, DrawerLayoutAndroid, Picker } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Card } from 'antd-mobile-rn';
import { BarCodeScanner, Permissions } from 'expo';

import { EvilIcons } from "@expo/vector-icons"
import { Dropdown } from 'react-native-material-dropdown';

import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Label } from 'native-base';
import Header from "./Header";
import Menu from "./Menu";



export default class Fixtures extends Component {
	constructor(props) {
		super(props);
		this.state = {
		
		};
	}

	

	static navigationOptions = {
		header: null
	}

	_

	closeDrawer = () => {
		this.drawer.closeDrawer();
	};

	handleMenu = () => {
		this.drawer.openDrawer();
	};

	handleTotalStock = () => {
		alert('Total quantity is 12345')
	}



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
							<Header title="Fixtures" openSideBar={this.handleMenu} />




							<View>
								<Card style={styles.InputCard}>
								</Card>

							</View>

						</View>


					</ScrollView>

				</KeyboardAvoidingView>

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
	label: {
		fontSize: 16,
		paddingTop: 5,
		margin: 10

	},
	picker: {
		height: 40,
		width: '100%'
	},
	textInput3: {
		width: '67%'
	},

	textInput3Product: {
		width: '56%',
		marginLeft: 30
	},
	InputBarcode: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "75%",
		marginLeft: 34,
		borderRadius: 5,
		padding: 5
	},
	barcode: {
		marginTop: 9,
		width: 28,
		marginRight: 15
	},

	dateInput: {
		height: 45,
		borderWidth: 0.5,
		borderColor: "#1890ff",
		marginTop: 10,
		borderRadius: 5,
		marginRight: 10
	},
	textInput2: {
		width: '67%',
		marginLeft: 26,
		height: 45
	},

	cardItems: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	textInput: {
		borderWidth: 0.5,
		borderColor: '#1890ff',
		margin: 10,
		padding: 5,
		borderRadius: 5,
		height: 45

	},
	textInputProduct: {
		borderWidth: 0.5,
		borderColor: '#1890ff',
		margin: 10,
		padding: 5,
		borderRadius: 5,
		height: 45,
		marginLeft: 50

	},

	buttonView: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		marginLeft: 10,
		marginTop: 20
	},
	buttonAddStock: {
		flexDirection: "row",
		width: "39%",
		marginTop: 10,
		backgroundColor: "#1890ff",
		height: 40,
		borderRadius: 5,
		justifyContent: "center",

	},
	buttonIconAddStock: {
		marginTop: 8,
		marginLeft: 10
	},
	buttonTextAddStock: {
		marginTop: 6,
		color: "#ffffff",
		fontSize: 18,
		marginLeft: 10
	},
	buttonCancel: {
		flexDirection: "row",
		width: "35%",
		marginTop: 10,
		backgroundColor: "gray",
		height: 40,
		borderRadius: 5,
		marginRight: 10,
		justifyContent: "center",

	},
	buttonIconCancel: {
		marginTop: 10,
		marginLeft: 7
	},
	buttonTextCancel: {
		marginTop: 5,
		color: "#ffffff",
		fontSize: 20,
		marginLeft: 7
	},
	shiftInput: {
		height: 40,
		borderWidth: 1,
		borderColor: "#1890ff",
		marginTop: 10,
		width: "68%",
		marginLeft: 54,
		borderRadius: 5,
	},
	mainInputView: {
		flexDirection: "row",
		width: '100%'
	},
	mainBg: {
		backgroundColor: "#e5e5e5",
		flex: 1
	}
})
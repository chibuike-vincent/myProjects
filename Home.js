import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, DrawerLayoutAndroid, Picker } from 'react-native';
import { Button, WhiteSpace, WingBlank, InputItem, Card } from 'antd-mobile-rn';
import { createStackNavigator } from 'react-navigation';
import { EvilIcons } from "@expo/vector-icons"

import { Entypo, Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Label } from 'native-base';
import Header from "./Header";
import Menu from "./Menu"




class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			barcode: '',
			product: '',
			unit: '',
			quantity: '',
			date: '',
			language: ''
		};
	}

	static navigationOptions = {
		header: null,
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
							<Header title="Live Update" openSideBar={this.handleMenu} />
				<KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={200}>

					<ScrollView keyboardShouldPersistTaps={'handled'}>


							<View style={{flex:1 }}>

								<Card style={styles.mainCard}>
								<View style={styles.generalCardView1}>
									<View style={styles.generalCardView2}>


										<View style={styles.cardMainView}>
										<TouchableOpacity  onPress={() => this.props.navigation.navigate('SellProductScreen')}>
											<Card style={styles.card}>
												<View style={styles.cardView}>
													<Image source={require('./Assets/Group.png')} />
													<Text style={styles.cardText}>Sell</Text>
												</View>
											</Card>
											</TouchableOpacity>
										</View>

										<View style={styles.cardMainView}>
										<TouchableOpacity onPress={() => {this.props.navigation.navigate('DailyAccountScreen')}}>
											<Card style={styles.card}>
											<View style={styles.cardView}>
													<Image source={require('./Assets/Compound_Path.png')} />
													<Text style={styles.cardTextDailyAccount}>Daily Account</Text>
												</View>
											</Card>
											</TouchableOpacity>
										</View>

									</View>

									<View style={styles.generalCardView2}>


										<View style={styles.cardMainView}>
										<TouchableOpacity  onPress={() => this.props.navigation.navigate('ViewStockScreen')}>
											<Card style={styles.card}>
												<View style={styles.cardView}>
													<Image source={require('./Assets/Compound_Path2.png')} />
													<Text style={styles.cardText}>View Stock</Text>
												</View>
											</Card>
											</TouchableOpacity>
										</View>

										<View style={styles.cardMainView}>
										<TouchableOpacity onPress={() => this.props.navigation.navigate('InputStockScreen')}>
											<Card style={styles.card}>
											<View style={styles.cardView}>
													<Image source={require('./Assets/Group_2.png')} />
													<Text style={styles.cardText}>Input Stock</Text>
												</View>
											</Card>
											</TouchableOpacity>
										</View>

									</View>
									</View>
								</Card>
							</View>

					</ScrollView>
				</KeyboardAvoidingView>					
						</View>
			</DrawerLayoutAndroid>


		)
	}
}






const styles = StyleSheet.create({
	mainCard: {
		borderWidth: 1,
		marginTop: 2,
		marginLeft: 5,
		marginRight: 5,
		height:550
	},
	mainBg: {
		backgroundColor: "#e5e5e5",
		flex: 1
	},
	cardMainView: {
		width: '50%',
	},
	card: {
		height:155
	},
	cardView: {
		alignItems:'center',
		justifyContent:'center',
		flex:1
	},
	cardText: {
		fontSize: 27,
		color:'#1890ff',
		margin:4
	},
	cardTextDailyAccount: {
		fontSize:26,
		color:'#1890ff'
	},
	totalInventoryView: {
		margin: 4
	},
	generalCardView2: {
		flexDirection: 'row',
		margin:4,
	},
	generalCardView1: {
		marginTop:90
	}
})

export default Home;
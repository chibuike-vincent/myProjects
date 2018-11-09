<<<<<<< HEAD
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
||||||| merged common ancestors
=======
import React, { Component } from 'react';
import { Text, View, Stylesheet, TouchableHighlight, Image, Button, ScrollView, Modal } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { gray } from 'ansi-colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

export default class Home extends Component {

	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}
	static navigationOptions = {
		header: null
	}
	render() {
		return (
			<View >

				<ScrollView>
					<View style={{ flexDirection: 'row', backgroundColor: '#0013ff' }}>

						<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.modalVisible}
							onRequestClose={() => {
								alert('Modal has been closed.');
							}}>
							<View style={{ marginTop: 22 }}>
								<View>
									<Text style={{textAlign:'center',fontSize:30}}>About:</Text>
									<Text style={{textAlign:'center',fontSize:30,marginTop:30}}>Ultimate Predictor version 1.0..... This is a match predictor base on performances and generalization from several sport analysts, and it is proven because before the App was created so many predictions has been made which returned true. </Text>
									<TouchableHighlight onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
										<Text style={{textAlign:'center',fontSize:30,marginTop:30, color:'red'}}>Exit</Text>
									</TouchableHighlight>
								</View>
							</View>
						</Modal>

						<Text style={{ marginTop: 40, fontSize: 30, marginLeft: 10, color:'#fff' }}>Ultimate Predictor </Text>

						<View style={{ flexDirection: 'row', marginTop: 45, justifyContent: 'space-between', marginLeft: 20, width: 100 }}>
							<EvilIcons name='star' size={30} color='white' />
							<Entypo name='share' size={30} color='white' />
							<TouchableHighlight onPress={() => { this.setModalVisible(true); }}>
								<Entypo name='dots-three-vertical' size={30} color='white' />
							</TouchableHighlight>
						</View>
					</View>
				</ScrollView>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'space-around',

					borderBottomWidth: 1,
					backgroundColor: '#0013ff',
					height: 50,
				}}>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('PlayedScreen')}>
						<EvilIcons style={{ marginTop: 20 }} name='trophy' size={30} color='#fff' />
					</TouchableHighlight>


					<TouchableHighlight onPress={() => this.props.navigation.navigate('HomeScreen')}>
						<Entypo style={{ marginTop: 15 }} name='home' size={30} color='#fff' />
					</TouchableHighlight>


					<TouchableHighlight onPress={() => this.props.navigation.navigate('BookedScreen')}>
						<MaterialCommunityIcons style={{ marginTop: 15 }} name='soccer' size={30} color='#fff' />
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.props.navigation.navigate('HighRiskScreen')}>
						<Feather style={{ marginTop: 15 }} name='life-buoy' size={30} color='#fff' />
					</TouchableHighlight>
				</View>




			</View>
		);
	}
}
>>>>>>> 30e17ab13d857cdf04485a54259f62db4654b608

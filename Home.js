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
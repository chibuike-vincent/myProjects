import React from 'react';
import { 
  View, 
  Text, 
  TouchableNativeFeedback, 
  ScrollView, 
  KeyboardAvoidingView, 
  ToastAndroid,
  ActivityIndicator,
  DrawerLayoutAndroid
 } from 'react-native';
import { 
  Item, 
  Label,
  Input
} from 'native-base';
import {SecureStore} from 'expo';
import Header from './Header';

class Signup extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      phone: '',
      password: '',
      confirmPassword: '',
      userLabel: 'Username',
      phoneLabel: "Phone number",
      passLabel: "Password",
      cpassLabel: "Confirm password",
      redColor: 'dodgerblue',
      redColor2: 'dodgerblue',
      redColor3: 'dodgerblue',
      redColor4: 'dodgerblue',
      signupBTN: 'Sign Up',
      green: 'dodgerblue',
      waiting: false,
      error: '',
      menuStatus: 'none',
      setMargin: 3
     
    }
  }

  async componentWillMount() {
    let result = await SecureStore.getItemAsync('ten_M_username');
  }

  static navigationOptions = {
    header: null
  }

  handleSignup = () => {

    this.setState({
      waiting: true,
      error: ''
    })

    setTimeout(()=> {
      this.setState({
        waiting: false
      })
    },8000)

    let {username, phone, password, confirmPassword} = this.state;

    if (username === "") {

      this.setState({
        userLabel: "Username is required",
        redColor: "red",
        waiting: false
      })

    }
    else if (phone === "") {

      this.setState({
        phoneLabel: "Phone number is required",
        redColor2: "red",
        waiting: false
      })

    }

    else if (isNaN(phone)) {

      this.setState({
        phoneLabel: "Phone number is not correct",
        redColor2: "red",
        waiting: false
      })

    }

    else if (password === "") {
      
      this.setState({
        passLabel: "Password is required",
        redColor3: "red",
        waiting: false
      })

    }

    else if (password.length < 6 ) {
      
      this.setState({
        passLabel: "Password length is too short, 6 atleast.",
        redColor3: "red",
        waiting: false
      })

    }

    else if (confirmPassword === "") {
      
      this.setState({
        cpassLabel: "Confirm password is required",
        redColor4: "red",
        waiting: false
      })

    }

    else if (password !== confirmPassword) {
      
      this.setState({
        redColor3: "red",
        redColor4: "red",
        waiting: false
      }) 

    }

    else {

      fetch('http://192.168.43.223:80/ten/signup/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',          
        },
        body: JSON.stringify({
          name: username,
          number: phone,
          pword: password
        })
      })
      .then((response) => response.json())
      .then(async(res) => {
        if (res.success === "true") {

          await SecureStore.setItemAsync('ten_M_username', username);
          await SecureStore.setItemAsync('ten_M_password', password);

          this.setState({
            signupBTN: "Sign up was successful",
            green: "green",
            username: '',
            phone: '',
            password: '',
            confirmPassword: '',
            waiting: false,
            error: "",
          })
          
          setTimeout(()=> {
            this.setState({
              signupBTN: "Sign Up",
              green: "dodgerblue",
            })
            this.props.navigation.navigate('LoginScreen')
          },3000);

        }
        else if (res.success === "exist") {
          this.setState({
            waiting: false,
            redColor: "red",
            error: `Username, ${username.toUpperCase()} taken, try another one.`
          })
        }
        else {
          this.setState({
            error: "Sign-up was NOT successful. Check network and try again."
          })
        }
        
      })
      .catch((error) => {
        ToastAndroid.showWithGravity(
          'Something happened wrong. Check network and retry',
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
      });

    }
    
  }

  closeDrawer = () => {
    this.drawer.closeDrawer();
  };

  handleMenu = () => {
    this.drawer.openDrawer();
  };

  handleLogin = () => {

  }
  render() {
    let {username, setMargin, phone, password, confirmPassword, menuStatus} = this.state
    return ( 
        <View>
          <Header setMargin={setMargin} menuStatus={menuStatus} title = "Sign Up" openSideBar={this.handleMenu} />
          <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={200}>
            <ScrollView keyboardShouldPersistTaps={'handled'}>
              <View style={{padding: 15}}>
                <View>
                  <Item 
                    floatingLabel 
                    style = {
                    { 
                      paddingTop: 10, 
                      paddingBottom: 10, 
                      borderColor: "dodgerblue", 
                      borderBottomWidth: 1
                    }}
                  >
              <Label 
              style={
                [
                  { color: "dodgerblue" }, 
                  {color: this.state.redColor}
                ]
                }>{this.state.userLabel}</Label>
              
              <Input
                underlineColorAndroid = "rgba(0,0,0,0)"
                style = {{fontSize: 18}}
                value={username}
                onChangeText = {username => this.setState({ 
                  username, 
                  userLabel: "Username",
                  redColor:  "dodgerblue"
                 })}
              />
            </Item>
          </View>

          <View style={{marginTop: 12}}>
            <Item 
            floatingLabel 
            style = {
              {
                borderColor: "dodgerblue", 
                borderBottomWidth: 1, 
                paddingTop: 10, 
                paddingBottom: 10
              }
            }>
              <Label 
              style={
                [
                  { color: "dodgerblue" }, 
                  {color: this.state.redColor2}
                ]}>{this.state.phoneLabel}</Label>

              <Input
                value={phone}
                underlineColorAndroid= "rgba(0,0,0,0)"
                style={{fontSize: 18}}
                onChangeText = {(phone) => this.setState({
                  phone,
                  phoneLabel: "Phone number",
                  redColor2:  "dodgerblue"
                })}
              />
            </Item>
          </View>

          <View style={{marginTop: 12}}>
            <Item 
              floatingLabel style = {
                {
                  borderColor: "dodgerblue", 
                  borderBottomWidth: 1, 
                  paddingTop: 10, 
                  paddingBottom: 10
                }
              }>
              <Label style = {
                [
                  { color: "dodgerblue" }, 
                  {color: this.state.redColor3}
                ]
              }>{this.state.passLabel}</Label>

              <Input
                value={password}
                underlineColorAndroid= "rgba(0,0,0,0)"
                style={{fontSize: 18}}
                secureTextEntry = {true}
                onChangeText = {(password) => this.setState({
                  password,
                  passLabel: "Password",
                  redColor3:  "dodgerblue"
                })}
              />
            </Item>
          </View>

          <View style={{marginTop: 12}}>
          
            <Item 
              floatingLabel 
              style = {
              {
                borderColor: "dodgerblue", 
                borderBottomWidth: 1, 
                paddingTop: 10, 
                paddingBottom: 10
              }
              }
            >
              <Label 
                style={
                  [
                    { color: "dodgerblue" }, 
                    {color: this.state.redColor4}
                  ]
                }
              >{this.state.cpassLabel}</Label>
              <Input
                value={confirmPassword}
                underlineColorAndroid= "rgba(0,0,0,0)"
                style={{fontSize: 18}}
                secureTextEntry = {true}
                onChangeText = {(confirmPassword) => this.setState({
                  confirmPassword,
                  cpassLabel: "Confirm password",
                  redColor4:  "dodgerblue"
                })}
              />
            </Item>
            
          </View>

          <ActivityIndicator size="large" animating={this.state.waiting} color = "dodgerblue"/>
          <View alignItems="center">
            <Text style={{color:"red"}}>{this.state.error}</Text>
          </View>
          <View style={{marginTop: 5}}>
            <TouchableNativeFeedback onPress= {this.handleSignup}>
              <View 
                style={
                  [
                    {backgroundColor: "dodgerblue", 
                    flexDirection: "row", 
                    justifyContent: "center"},
                    {backgroundColor: this.state.green}
                  ]
                }
              > 
                <Text 
                  style={
                    {
                      color: "white", 
                      padding: 15, 
                      fontSize: 18
                    }
                  }
                >{this.state.signupBTN}</Text>

              </View>
            </TouchableNativeFeedback>
          </View>

          <View 
            justifyContent = "center" 
            flexDirection="row" 
            style={{marginTop: 10 }}
          >
            <Text 
              style={
                  {
                    fontSize: 18, 
                    paddingTop: 10, 
                    paddingBottom: 10
                  }
                }
              >Already have an account? </Text>
            <TouchableNativeFeedback onPress={() => {this.props.navigation.navigate('LoginScreen')}}>
              <View flexDirection="row">
                <Text style={
                  {
                    color: "dodgerblue", 
                    fontSize: 18, 
                    paddingTop: 10, 
                    paddingBottom: 10, 
                    paddingRight: 5, 
                    paddingLeft: 5}
                  }
                >Login</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

        </View>

        </ScrollView>
        </KeyboardAvoidingView>
        
        </View>
      
    );
  }
}

export default Signup;


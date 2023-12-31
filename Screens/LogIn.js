import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './Home';
import Tabs from '../routes/Tabs';

export class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Add your login logic here
    // This could involve calling an API to authenticate the user
    // or updating state if using local state management
    console.log('Logging in:', this.state);

    // Navigate to the Home screen after successful login
    this.props.navigation.navigate('Tabs');
  };

  handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password" action
    console.log('Forgot Password clicked');
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome back!</Text>

        <Text style={styles.description}>Join with UniJobs, the largest undergraduate job seeking platform in Sri Lanka !</Text>

        <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />


        <TouchableOpacity style={styles.primarybtn} onPress={this.handleLogin}>
          <Text style={styles.primarybtnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('SignUp')} >
            <Text style={{color:'#019F99', paddingVertical:10}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/images/login_1.png')} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer:{
    flexDirection:"column",
    marginTop:35,
    alignItems:"center",
    },
  
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:50,
    textAlign:'left'
  },
  input: {
    height: 60,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    borderColor:'#019F99',
    marginBottom: 10,
    paddingHorizontal: 16,
    alignItems:'center'
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'50%',
    paddingVertical:10
    },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  image: {
    marginTop: 2,
    width: 250, // specify the width as needed
    height: 250, // specify the height as needed
    marginBottom:60 // adjust the resizeMode as needed
  },
  primarybtn:{
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#019F99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    color:'#fff',
    marginBottom:15
  },
  secondarybtn:{
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:'#019F99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    color:'#019F99',
    marginBottom:100,
  },
  primarybtnText:{
    fontSize: 20,
    color:'#fff'
  },
  description:{
    paddingBottom:30,
    fontSize:20
  }
});

export default LogIn;

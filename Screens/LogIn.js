import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

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
    this.props.navigation.navigate('Home');
  };

  handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password" action
    console.log('Forgot Password clicked');
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Log In</Text>

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
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  footer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  image: {
    marginTop: 50,
    width: 250, // specify the width as needed
    height: 250, // specify the height as needed
    resizeMode: 'contain', // adjust the resizeMode as needed
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
  }
});

export default LogIn;

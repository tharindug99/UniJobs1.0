import React, { Component } from 'react';
import { View, Button, Image, StyleSheet,Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import * as AuthSession from 'expo-auth-session';


// 567357165087-25pu02nh7hinacg4ff4trgfdj2l6p0vd.apps.googleusercontent.com

export class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  render() {

    handleGoogleClick = () => {
      // Add logic for Google icon click
      alert('Google icon clicked');
    };
  
    handleFacebookClick = () => {
      // Add logic for Facebook icon click
      alert('Facebook icon clicked');
    };
  
    handleLinkedInClick = () => {
      // Add logic for LinkedIn icon click
      alert('LinkedIn icon clicked');
    };

    const { navigation } = this.props;
    
    const icons ={
      facebookIcon : <Image source={require('../assets/icons/facebook.png')} style={{width:50, height:50}} />,
      linkedinIcon : <Image source={require('../assets/icons/linkedin.png')} style={{width:50, height:50}} />,
      googleIcon : <Image source={require('../assets/icons/google.png')} style={{width:45, height:50}} />
    }



    const fonts = {
      'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
      'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
      'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
      'Inter-Thin': require('../assets/fonts/Inter-Thin.ttf'),
      'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
      'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
      'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
      'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf')
    };

    handleSignUp = () => {
      // Add your signup logic here
      // This could involve calling an API to register the user
      // or updating state if using local state management
      console.log('Signing up:', this.state);
    };

    return (
      <ScrollView>
      <View style={styles.container}>
        {/* <Image source={require('../assets/images/login_1.png')} style={styles.image} /> */}
        <Text style={styles.heading}>Join Us Now..</Text>

        <Text style={styles.description}>Join with UniJobs, the largest undergraduate job seeking platform in Sri Lanka !</Text>

        <View style={styles.formContainer}>  
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />

        <Text>-Or Continue With-</Text>
        {/* Icons here */}
        <View style={styles.iconContainer}>    
      <TouchableOpacity onPress={handleGoogleClick}>
       <View>
        {icons.googleIcon}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFacebookClick}>
       <View>
        {icons.facebookIcon}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLinkedInClick}>
       <View>
        {icons.linkedinIcon}
        </View>
      </TouchableOpacity>
        
        </View>
        
        <TouchableOpacity style={styles.primarybtn} onPress={this.handleSignUp}>
            <Text style={styles.primarybtnText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
              <Text style={{ color: '#019F99', marginBottom:1}}> Login</Text>
          </TouchableOpacity>
        </View>

    
      </View>
      </View>
      </ScrollView>
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
    marginBottom: 150,
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
  },
  description:{
    paddingBottom:30,
    fontSize:20
  }
});

export default SignUp;
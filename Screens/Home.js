import { Text, View, Button, StyleSheet,ScrollView } from 'react-native'
import React, { Component } from 'react'


export class Home extends Component {
  render() {
    const { navigation } = this.props;
    
    return (
    <ScrollView> 
        {/* Main Container */}
        <View style={styles.container}>
          {/* Greeting Header  */}
            <Text style={styles.WelcomeText}>Welcome Back Jonathan !!!</Text>
        </View>
      </ScrollView> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    paddingTop:50,
    backgroundColor:"#fff",
    height: "100%"
  },
  WelcomeText:{
    fontSize:24,
    color:"#000",
    padding:2,
    marginLeft:10,
    paddingBottom:15
    },
})

export default Home
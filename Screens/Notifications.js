import { Text, View, Dimensions, StyleSheet, ScrollView,ImageBackground } from 'react-native'
import React, { Component } from 'react'

export class Notifications extends Component {
  render() {
    return (
      <View>
        <ScrollView style={[styles.scrollview]}>
            <Text>Hiii</Text>
            <Text>Hiii</Text>
            
            <Text>Hiii</Text> 
        </ScrollView>
        <ImageBackground
            style={[styles.fixed, styles.container, {zIndex: -1}]}
            source={require('../assets/images/bg-1.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    opacity:0.2
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent'
 }
});

export default Notifications
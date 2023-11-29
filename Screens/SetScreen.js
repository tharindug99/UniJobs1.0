import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export class SetScreen extends Component {
  render() {
    return (
      <View>
        <Text>SetScreen</Text>
        <Image source={require('../assets/icons/right.png')} style={{width:20, height:20, marginLeft:30, marginTop:6 }} />
      </View>
    )
  }
}

export default SetScreen
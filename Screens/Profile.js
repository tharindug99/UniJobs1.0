import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [nic, setNIC] = useState('12345-6789012-3');
  const [age, setAge] = useState('25');
  const [address, setAddress] = useState('123 Main Street, City');
  const [qualifications, setQualifications] = useState([]);
  const [experience, setExperience] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSave = () => {
    // Implement save functionality
    console.log('Profile Saved!');
  };

  const handleAddQualification = () => {
    setQualifications([...qualifications, 'New Qualification']);
  };

  const handleAddExperience = () => {
    setExperience([...experience, 'New Work Experience']);
  };

  const handleDeleteQualification = (index) => {
    const updatedQualifications = [...qualifications];
    updatedQualifications.splice(index, 1);
    setQualifications(updatedQualifications);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image size={100} source={profilePicture ? { uri: profilePicture } : require('../assets/images/kemal.jpg')} />
        <Button mode="contained" style={{backgroundColor:'#019F99'}} onPress={() => console.log('Change Profile Picture')}>
          Change Picture
        </Button>
      </View>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>Edit Personal Information</Title>
          <Text style={styles.labelText}>Full Name</Text>
          <TextInput
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
            labelPosition="left"
          />
          <Text style={styles.labelText}>Contact No.</Text>
          <TextInput
            label="NIC"
            value={nic}
            onChangeText={(text) => setNIC(text)}
            style={styles.input}
            labelPosition="left"
          />
          <Text style={styles.labelText}>Age</Text>
          <TextInput
            label="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            style={styles.input}
          />
          <Text style={styles.labelText}>Residential Address</Text>
          <TextInput
            label="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.input}
          />
        </Card.Content>
      </Card>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>Academic Qualifications</Title>
          {qualifications.map((qualification, index) => (
            <View key={index} style={styles.listItem}>
              <Text>{qualification}</Text>
              <TouchableOpacity onPress={() => handleDeleteQualification(index)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Button mode="outlined" style={{backgroundColor:'#000', borderColor:'white'}} onPress={handleAddQualification}>
            <Text style={{color:'#fff'}}>Add Qualification</Text> 
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.Card}>
        <Card.Content>
          <Title>Work Experience</Title>
          {experience.map((exp, index) => (
            <View key={index} style={styles.listItem}>
              <Text>{exp}</Text>
              <TouchableOpacity onPress={() => handleDeleteExperience(index)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Button mode="outlined" style={{backgroundColor:'#000', borderColor:'white'}} onPress={handleAddExperience}>
          <Text style={{color:'#fff'}}>Add Work Experience</Text>
          </Button>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        Save Profile
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
    margin:20
  },
  input: {
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  deleteText: {
    color: 'red',
  },
  saveButton: {
    marginTop: 16,
    backgroundColor:'#019F99', 
    borderColor:'white'
  },
  labelText:{
    fontWeight:'900'
  },
  Card:{
    margin:10
  }
});

export default Profile;

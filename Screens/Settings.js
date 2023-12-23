import * as React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // You can replace this with your preferred icon library

const Settings = () => {
  const settingsData = [
    {
      id: "1",
      title: "Account Settings",
      icon: "cogs",
      description: "Manage your account details",
    },
    {
      id: "2",
      title: "Notifications",
      icon: "bell",
      description: "Configure your notification preferences",
    },
    {
      id: "3",
      title: "Privacy",
      icon: "lock",
      description: "Adjust your privacy settings",
    },
    // Add more settings items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.settingItem}>
      <FontAwesome name={item.icon} size={24} color="#019f99" style={styles.settingIcon} />
      <View>
        <Text style={styles.settingTitle}>{item.title}</Text>
        <Text style={styles.settingDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.allSetToGo}>
      
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.settingsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  settingDescription: {
    color: '#777',
  },
  settingsList: {
    marginTop: 10, // Adjust the marginTop to position the list below the "You are all set to go!" text
  },
  allSetToGo: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Settings;

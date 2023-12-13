import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const RecentJobs = () => {
  const [expanded, setExpanded] = useState(false);

  const jobData = [
    {
      title: 'Recent Job 1',
      company: 'TechCo',
      wages: '$90,000',
      location: 'New York, NY',
    },
    {
      title: 'Recent Job 2',
      company: 'TechCo',
      wages: '$95,000',
      location: 'Los Angeles, CA',
    },
    {
      title: 'Recent Job 3',
      company: 'TechCo',
      wages: '$85,000',
      location: 'Chicago, IL',
    },
    {
      title: 'Recent Job 3',
      company: 'TechCo',
      wages: '$85,000',
      location: 'Chicago, IL',
    },
    // Add more recent job objects as needed
  ];

  const handleShowAll = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text style={styles.title}>Recent Jobs</Text>
      <FlatList
        data={expanded ? jobData : jobData.slice(0, 1)} // Show all or only the first item
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text>{item.company}</Text>
            <Text>Wages: {item.wages}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
      />
      {!expanded && (
        <TouchableOpacity onPress={handleShowAll} style={styles.showAll}>
          <Text>Show All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
    marginLeft: 10,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  showAll: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecentJobs;

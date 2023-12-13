import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const RecommendedCard = () => {
  const jobData = [
    {
      title: 'Software Engineer',
      company: 'TechCo',
      wages: '$100,000',
      location: 'San Francisco, CA',
    },
    {
        title: 'Software Engineer',
        company: 'TechCo',
        wages: '$100,000',
        location: 'San Francisco, CA',
      },
      {
        title: 'Software Engineer',
        company: 'TechCo',
        wages: '$100,000',
        location: 'San Francisco, CA',
      },
    
  ];

  return (
    <View>
      <Text style={styles.title}>Recommended Jobs</Text>
      <View style={styles.container}>
        <FlatList
          data={jobData}
          horizontal
          showsHorizontalScrollIndicator={false}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
    marginLeft:10
  },
  container: {
    padding: 10,
    marginLeft:1
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    minWidth: 300,
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
});

export default RecommendedCard;

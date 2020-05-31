import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Han Wang</Text>
      <Text style={styles.age}>Age: 20</Text>
      <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Image 
        style={styles.picture}
        source={require('./assets/hanwangpicture.png')}
      />
      <View style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36
  },

  name: {
    marginTop: 60,
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold'
  },

  age: {
    marginTop: 16,
    fontSize: 24,
    color: '#FF6767',
    fontWeight: 'bold'
  },

  bio: {
    marginTop: 12,
    fontSize: 16,
    color: '#555555'
  },

  picture: {
    marginTop: 4
  },

  logoutButton: {
    marginTop: 36,
    height: 38,
    width: '100%',
    backgroundColor: '#FF6767',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoutText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
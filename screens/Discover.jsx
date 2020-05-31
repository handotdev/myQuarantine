import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Card from '../components/Card';

export default function Discover() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Card />
      <Card />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36
  },

  userCard: {
    marginVertical: 8,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#F9F9F9',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },

  textContainer: {
    marginLeft: 4,
    flex: 1,
    textAlign: 'right',
    // backgroundColor: '#333'
  },

  userText: {
    textAlign: 'right'
  },

  nameText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  nameTextBold: {
    color: '#FF6767'
  },

  bioText: {
    fontSize: 16,
    color: '#555'
  },

  title: {
    marginTop: 60,
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold'
  },

  profilePic: {
    height: 88,
    width: 88,
    borderRadius: 44
  }
});
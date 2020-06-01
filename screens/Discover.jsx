import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Card from '../components/Card';

export default function Discover() {

    const [users, setUsers] = useState([
        {
            name: "Colton Underwood",
            email: "colton@bachelor.com",
            image: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp",
            age: 24,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        },
        {
            name: "Nick Viall",
            email: "nick@bachelor.com",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nickviall-89747516-251757629322778-1879807299067145470-n-1586800462.jpg",
            age: 27,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        },
        {
            name: "Sean Lowe",
            email: "sean@bachelor.com",
            image: "https://media4.s-nbcnews.com/j/streams/2013/March/130314/1C6440809-tdy-130312-sean-lowe.fit-760w.jpg",
            age: 24,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        },
        {
            name: "Ben Higgins",
            email: "ben@bachelor.com",
            image: "https://pbs.twimg.com/profile_images/914986782063681536/RWAXB-2C.jpg",
            age: 21,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        }
    ]);


  return (
    
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      {
          users.map((user, i) => <Card key={i} name={user.name} email={user.email} image={user.image} age={user.age} bio={user.bio}/> )
      }
    </ScrollView>
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